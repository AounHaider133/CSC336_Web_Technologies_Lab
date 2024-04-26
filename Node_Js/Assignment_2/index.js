const Http = require("./Create_Server");
const OS = require("./Operating_Systems");
const FS = require("./File_System");
const Path = require("./Paths");

console.log(OS.getOSDetails());
console.log(
  Path.getDirName(
    "E:\\Semesters Material\\Semester#06\\Web Technologies\\Lab\\Node_Js\\Assignment_2"
  )
);
console.log(FS.getFileData("Create_Server.js"));
Http.getServer(3000); //create server on port 3000
