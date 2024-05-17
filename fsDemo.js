import { log } from "console";
import fs from "fs/promises";
// import fs from "fs";

// readfile() - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//  readFIleSync() -sychronous version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);
// reafile() - Promise .then ()

// fs.readFile("./test.txt", "utf8")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//  readFile async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello I am writing to this file");
    console.log("file wriiten tp...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\n This is append text");
    console.log("File appended to....");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
