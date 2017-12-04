let inputs = process.argv.slice(2);
let result = inputs.map( x => x[0] )
                    .reduce( (memo, x) => memo + x, '' );
console.log(`[${inputs}] becomes "${result}"`);