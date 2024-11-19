const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => console.log('Frontend running on http://localhost:3000'));
