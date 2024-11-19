const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from the backend!' }));
});

server.listen(4000, () => console.log('Backend running on http://localhost:4000'));
