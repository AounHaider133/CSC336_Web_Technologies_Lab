const http = require("http");

const dummyData = [
  { id: 1, title: "Article 1", content: "Content of article 1" },
  { id: 2, title: "Article 2", content: "Content of article 2" },
  { id: 3, title: "Article 3", content: "Content of article 3" },
  { id: 4, title: "Article 4", content: "Content of article 4" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/api/article") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(dummyData));
    return res.end();
  } else {
    res.write("<h1>Welcome to CUI Lahore</h1>");
    return res.end();
  }
});

server.listen(3000);
