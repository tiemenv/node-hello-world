const http = require('http');
const fs = require('fs'); //Filesystem module

fs.readFile('index.html', (err, html) => {
    if (err) {
        throw err;
    }

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log("Server started on port " + port);
    });

});

