// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello world, ",i);
// }
//node-> js runtime environment.
// -----------------------------------------
// console.log(process.argv); 
// process.argv is an array of items , first 2 items are default.

// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello to",args[i]);
// }

// -----------------------------------------
// const math=require("./math");
// // console.log(math);
// console.log(math.sum(20,43));
// console.log(math.g);
// console.log(math.PI);

// -----------------------------------------
// const fruits=require("./fruits")
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[0].name);
// console.log(fruits[2].color);

// -----------------------------------------
import {sum,PI} from "./math.js";
console.log(sum(65,49));
console.log(PI);