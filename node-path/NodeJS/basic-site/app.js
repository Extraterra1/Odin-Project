const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    const filename = (req.url.split('/')[1] || 'index') + '.html';
    fs.readFile(filename, (err, data) => {
      if (err) {
        return fs.readFile('404.html', (err, data) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          return res.end();
        });
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

console.log('listening');
