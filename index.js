const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");

http
  .createServer((req, res) => {
    const clientUrl = url.parse(req.url);
    console.log(req.url);
    console.log(clientUrl);

    if (clientUrl.pathname == "/") {
      fs.readFile("./Directory/index.html", (error, data) => {
        if (error) return res.end();
        else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    } else if (clientUrl.pathname == "/about") {
      fs.readFile("./Directory/about.html", (error, data) => {
        if (error) return res.end();
        else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    } else if (clientUrl.pathname == "/contactme") {
      fs.readFile("./Directory/contact_me.html", (error, data) => {
        if (error) return res.end();
        else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    } else if (clientUrl.pathname == "/favicon.ico") {
      fs.readFile("./Directory/favicon.html", (error, data) => {
        if (error) return res.end();
        else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    } else {
      fs.readFile("./Directory/404_page_not_found.html", (error, data) => {
        if (error) return res.end();
        else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(8800);
