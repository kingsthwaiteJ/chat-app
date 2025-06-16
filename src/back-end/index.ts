import express from "express";
import { createServer } from "http";
import { resolve} from "path";
import { Server } from "socket.io";
import cluster from "cluster";
import { createAdapter, setupPrimary } from "@socket.io/cluster-adapter";

import { db } from "./database";  
import * as database from "./database";

// Use a singleton for better accessibility
export let ExpressServerInstance: ExpressServer;

export class ExpressServer {
	private _database: any; // TODO: Fix typings for this definition
	private _socket: any; // TODO: Fix typing for this definition
	private _port: number;
	private _ready: boolean = false;
	private server: any; // TODO: Fix typing for this definition

	public get database() {
		return this._database;
	}

	public get socket() {
		return this._socket;
	}

	public get port() {
		return this._port;
	}

	public get ready() {
		return this._ready;
	}

	constructor(targetPort?: number) {
		// Save the port number
		this._port = targetPort || parseInt(process.env.PORT);
	}

	public async initialise() {
		// Initialise the database
		this._database = await database.initialise();
	
		// Initialise the server
		const app = express();
		this.server = createServer(app);
		this._socket = new Server(this.server, {
			connectionStateRecovery: {},
			adapter: createAdapter(),
			cors: {
				origin: `http://localhost:${this.port}`
			}
		});
		
		// Serve the static site
		app.use('/', express.static(resolve('./src')));
		app.get("/", (req, res) => {
			
		});
	
		// Socket handling
		this.handleSocketConnections(this._socket);
	
		// Start the server, listen on the specified port
		this.server.listen(this.port, () => {
			console.log(`server running at http://localhost:${this.port}`);
		});

		this._ready = true;
	}

	private handleSocketConnections(socket) {
		// Handle socket connection
		socket.on("connection", async (socket) => {
			// Handle socket message
			socket.on("message", async (msg, clientOffset, callback) => {
				console.log('Received new message.');
				let result;
				try {
					// Save message to database
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
				// Broadcast message to other connected clients
				socket.emit("message", msg, result.lastID);
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
	}

	public close() {
		this.server?.close();
		this._socket?.close();
	}
}

export async function run(port?: number) {
	if (cluster.isPrimary) {
		// Initialise the cluster
		const numCPUs = 2;
		for (let i = 0; i < numCPUs; i++) {
			cluster.fork({
				PORT: 3000 + i,
			});
		}
	
		setupPrimary();
	} else {
		ExpressServerInstance = new ExpressServer(port);
		ExpressServerInstance.initialise();
		return ExpressServerInstance;
	}
}

run();