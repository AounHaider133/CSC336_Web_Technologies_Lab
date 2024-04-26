const fs = require("fs");

writeDataToFile = (filename, data) => {
  fs.writeFile(filename, data, "utf-8", (err) => {
    if (err) {
      console.log("Error while writing the data");
      return;
    }
  });
};

getFileData = (filename, format = "utf-8") => {
  fs.readFile(filename, format, (err, data) => {
    if (err) {
      console.log("Error while reading the file!");
    } else {
      console.log("Data in the file is: ");
      console.log(data);
    }
  });
};
exports.getFileData = getFileData;
exports.writeDataToFile = writeDataToFile;
