const path = require("path");

getDirName = (pathname) => {
  console.log(path.dirname(pathname));
};

exports.getDirName = getDirName;
