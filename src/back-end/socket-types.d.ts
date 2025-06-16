interface ServerToClientEvents {
	noArg: () => void;
	message: (message: string, clientOffset: number) => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
	hello: () => void;
	message: (message: string, clientOffset: string, callback?: () => void) => void;
}

interface DefaultEventsMap {
	
}

interface InterServerEvents {
  	ping: () => void;
}

interface SocketData {
	name: string;
	age: number;
}
