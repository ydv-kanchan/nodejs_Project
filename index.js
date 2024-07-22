//what are modules : modules are used to access functions from different js file in another file
//types of modules: user defined, predefined,  third-party module: comes from npm package

//const { Add, Sub } = require("./math.js"); //initialise
//to destrucure 'add' we will use { } curly BroadcastChannel

//2.
// import sub, { add } from "./math.js";

//1.
import { sub, add } from "./math.js"; //import multiple modules  by destructuring them
console.log(add(20, 40));
console.log(sub(60, 10));

import fs from "fs"; //used for file handling

fs.open("./file.txt", (err) => {
  if (err) console.log("Error");
  else console.log("File successfully opened");
});

// if file do not exist then it will give error
// utf -8 is used for :
// callback function is used with two arguments err and data
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

fs.writeFile("./file.txt", "i am good today.", (err, data) => {
  if (err) console.log(err);
  else console.log("file written succressfully");
});

fs.writeFile("./hello.html", "<h1>Hello world</h1>", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

//we can not write in json file normally so we will stringify it
let json = JSON.stringify({
  name: "kanchan",
  class: "G - 10",
  college: "Chitkara",
});

fs.writeFile("./data.json", json, (err) => {
  if (err) console.log(err);
  else console.log("file created and data addded");
});
