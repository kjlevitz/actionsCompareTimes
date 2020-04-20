var Benchmark = require('benchmark');
const { exec } = require("child_process");
var suite = new Benchmark.Suite;


async function sysCmd(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
// add tests
suite

.add('Run index.js', async function() {
  await sysCmd("node index.js");
})

// add listeners
.on('cycle', function(event) {
  //console.log(String(event.target));
  //console.log(JSON.stringify(event.target.stats.sample));
  //console.log(String(event.target.stats.mean));
  console.log(String(event.target.stats.time));
})
// run async
.run({'async': true});
