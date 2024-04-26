const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write(
      '<head><title>Web Course</title></head><body><form action="/message" method="POST">' +
        '<input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1]; // Extracting message from form data
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/message"); // Redirection
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      "<head><title>Web Course</title></head><body><h1>Hello from my Node.js Server</h1></body>"
    );
    res.write("</html>");
    res.end();
  }
};

module.exports.handler = requestHandler;
