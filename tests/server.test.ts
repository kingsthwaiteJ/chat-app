import { createServer } from "http";
import { AddressInfo } from "net";
import { io as ioc, Socket as ClientSocket } from "socket.io-client";
import { Server, Socket as ServerSocket } from "socket.io";
import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import { ExpressServer, run } from "../src/back-end/index";

describe("Server-side Tests", () => {
    const port = 3003;

    test("Start the server", async () => {
        await run(port);
    });
});
