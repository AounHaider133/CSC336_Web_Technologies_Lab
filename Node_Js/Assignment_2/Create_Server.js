const http = require("http");

const getServer = (portNo) => {
  return http
    .createServer((req, res) => {
      res.write("Server is listening  on portNo: " + portNo);
    })
    .listen(portNo);
};

exports.getServer = getServer;
