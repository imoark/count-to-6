let arg = process.argv.slice(2);
let data = {};

[, data.username, data.email] = arg;

console.log(data)