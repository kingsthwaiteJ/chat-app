// TODO: 'io' here is imported using the /socket.io/socket.io.js import in index.html, sort out this type error
// Initialize the socket
const socket = io({
    auth: {
        serverOffset: 0
    },
    // enable retries
    ackTimeout: 10000,
    retries: 3,
});

let counter = 0;

// Retrieve relevant UI elements for displaying messages and tracking new messages sent
const form: any = document.getElementById('form');
const input: any = document.getElementById('input');
const messages: any = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        // compute a unique offset
        console.log('Sending new message.');
        const clientOffset = `${socket.id}-${counter++}`;
        socket.emit('message', input.value, clientOffset);
        input.value = '';
    }
});

socket.on('message', (msg, serverOffset) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    socket.auth.serverOffset = serverOffset;
    console.log('Message received!');
});