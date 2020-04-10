var Benchmark = require('benchmark');
const { exec } = require("child_process");
var suite = new Benchmark.Suite;


// add tests
suite.add('Run index.js', function() {
  child_process.execSync("node index.js", (error, stdout, stderr) => {
      if (error) {/*console.log(`error: ${error.message}`);*/return;}if (stderr) {return;} //console.log(`stdout: ${stdout}`);})
})
  
.add('Run index.js 2', function() {
  child_process.execSync("node index.js", (error, stdout, stderr) => {
      if (error) {/*console.log(`error: ${error.message}`);*/return;}if (stderr) {return;} //console.log(`stdout: ${stdout}`);})
})
    
.add('indexOf String', function() {
  'Hello World!'.indexOf('o') > -1;
})


// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run();
