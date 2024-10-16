
// IMPORTING OS

const os = require("node:os");
console.log(os);
  

// IMPORTING FILESYSTEM

 const fs = require("node:fs");

// CREATING FOLDER



fs.mkdir("folder", (err) => {
  if (err) {
    console.log(err);
  } 
});

// ADDING FILE IN ROOT ELEMENT

fs.appendFileSync("file.txt", "Hello World");

// ADDING FILE IN FOLDER

fs.appendFileSync("folder/demo.txt", "Hello World");

// EDITING CONTENT INSIDE THE FILE

fs.writeFileSync("folder/demo.txt", "Hello sky"); 


fs.mkdir("exe1", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.appendFileSync("exe1/exe1file.txt", "this is second file");

// READING THE FILE

const read = fs.readFileSync("exe1/exe1file.txt", "utf-8");
console.log(read);


// DELETING THE FILE
fs.unlinkSync("exe1/exe1file.txt");
