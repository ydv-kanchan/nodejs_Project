export function add(a, b) {
  //name export
  return a + b;
}
export function sub(x, y) {
  //1.name export
  return x - y;
}

// 2.module.exports = {
//   Add: add,
//   Sub: sub,
// };//exports using object in module.export

// 3.module.export = {
//   add,
// }; //export one function by using module.export

// 4. export default sub;
//we can only export and import one module as default

// to use module  import export we have to write "type": "module", in package.json