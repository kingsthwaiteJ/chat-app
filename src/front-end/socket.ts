import { io } from 'socket.io-client';

export const socket = io({
    auth: {
        serverOffset: 0
    },
    // enable retries
    ackTimeout: 10000,
    retries: 3,
});