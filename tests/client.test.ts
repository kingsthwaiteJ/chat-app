import { io as ioc} from "socket.io-client";
import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import { run } from "../src/back-end/index";

describe("Client-side Tests", () => {
    const port = 3003;
    let clientSocket;

    beforeAll(async () => {
        await run(port);
    });

    afterAll(async () => {
        await clientSocket?.disconnect();
    });

    test("Connect to server", (done) => {
        clientSocket = ioc(`http://localhost:${port}`, { 
            auth: {
                serverOffset: 0
            },
            ackTimeout: 10000, 
            retries: 3 
        });
        console.log(clientSocket);
        clientSocket.on("connection", done);
    });

    test("Send message", (done) => {
        clientSocket.on("message", (message, serverOffset) => {
            expect(message).toBe('Hello');
            done();
        });
        clientSocket.emit("message", 'Hello', 0);
    });
});
