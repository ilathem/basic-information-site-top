import http from "http";
import { parse } from "url";
import { readFile } from "fs";

http
  .createServer(function(req, res) {
    const path = parse(req.url).path;
    let filename = "/404.html";
    switch (path) {
      case "/index.html":
        filename = "/index.html";
        break;
      case "/about.html":
        filename = "/about.html";
        break;
      case "/contact-me.html":
        filename = "/contact-me.html";
        break;
    }
    filename = "." + filename;
    readFile(filename, function(err, data) {
      if (err) filename = "./404.html";
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
