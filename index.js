//what are modules : modules are used to access functions from different js file in another file
//types of modules: user defined, predefined,  third-party module: comes from npm package

// const { Add, Sub } = require("./math.js"); //initialise
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
});
