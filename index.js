// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Dockerized Node.js App!\n");
});

server.listen(80, () => {
  console.log("Server running on port 80");
});
