// basic server using http module
// run with: node server.js

const http = require("http");

const PORT = 3000;

const server = http.createServer(function (req, res) {
  console.log("request came for: " + req.url);

  if (req.url == "/") {
    res.end("Welcome to Node Server");
  } else if (req.url == "/about") {
    res.end("About Page");
  } else if (req.url == "/contact") {
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

server.listen(PORT, function () {
  console.log("server running on http://localhost:" + PORT);
});
