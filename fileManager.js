const fs = require("fs");

const path = "./test.txt";

console.log("Creating File...");
fs.writeFile(path, "Hello Node.js", function (err) {
  if (err) {
    console.log("error creating file: " + err.message);
    return;
  }
  console.log("File Created");

  console.log("Reading File");
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log("error reading file: " + err.message);
      return;
    }
    console.log(data);

    fs.appendFile(path, "\nLearning FS Module", function (err) {
      if (err) {
        console.log("error updating file: " + err.message);
        return;
      }
      console.log("File Updated");

      fs.readFile(path, "utf8", function (err, data) {
        if (err) return;
        console.log(data);

        fs.unlink(path, function (err) {
          if (err) {
            console.log("error deleting file, maybe it doesn't exist: " + err.message);
            return;
          }
          console.log("File Deleted");
        });
      });
    });
  });
});
