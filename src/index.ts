import express from "express";
import { createServer } from "http";
import { resolve} from "path";
import { Server } from "socket.io";
import { Database } from "sqlite3";
import { open } from "sqlite";
import cluster from "cluster";
import { createAdapter, setupPrimary } from "@socket.io/cluster-adapter";


async function run() {
	if (cluster.isPrimary) {
		const numCPUs = 2;
		for (let i = 0; i < numCPUs; i++) {
			cluster.fork({
				PORT: 3000 + i,
			});
		}
	
		setupPrimary();
	} else {
		const db = await open({
			filename: "chat.db",
			driver: Database,
		});
	
		await db.exec(`
			CREATE TABLE IF NOT EXISTS messages (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			client_offset TEXT UNIQUE,
			room INT NULL,
			content TEXT
			);
		`);
	
		await db.exec(`
			CREATE TABLE IF NOT EXISTS rooms (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT UNIQUE
			);
		`);
	
		const app = express();
		const server = createServer(app);
		const io = new Server(server, {
			connectionStateRecovery: {},
			adapter: createAdapter(),
		});
		
		app.use('/', express.static(resolve('./src')));
		app.get("/", (req, res) => {
			
		});
	
		io.on("connection", async (socket) => {
			socket.on("message", async (msg, clientOffset, callback) => {
				console.log('Received new message.');
				let result;
				try {
					result = await db.run(
						"INSERT INTO messages (content, client_offset) VALUES (?, ?)",
						msg,
						clientOffset
					);
				} catch (e: any) {
					if (e.errno === 19 /* SQLITE_CONSTRAINT */) {
						callback!();
					} else {
						// nothing to do, just let the client retry
					}
					return;
				}
				io.emit("message", msg, result.lastID);
				callback!();
			});
	
			if (!socket.recovered) {
				try {
					await db.each(
						"SELECT id, content FROM messages WHERE id > ?",
						[socket.handshake.auth.serverOffset || 0],
						(_err, row) => {
							socket.emit("message", row.content, row.id);
						}
					);
				} catch (e) {
					// something went wrong
				}
			}
		});
	
		const port = process.env.PORT;
	
		server.listen(port, () => {
			console.log(`server running at http://localhost:${port}`);
		});
	}
}

run();