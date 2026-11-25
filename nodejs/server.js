const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end('Node.js Render Container Running!');
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});