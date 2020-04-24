var Benchmark = require('benchmark');
const { exec } = require("child_process");
var suite = new Benchmark.Suite;
var execSync = require('child_process').execSync;


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

// .add('Run index.js', async function() {
//   await sysCmd("node index.js");
// })

.add('Run Long Looper', async function() {
  execSync("node endlessloop.js");
})

// add listeners
.on('cycle', function(event) {
  let date_ob = new Date();
  console.log("CURRENT TIME ON JOB FINISH = " + date_ob );
  console.log(String(event.target)); //DEFAULT
  //console.log(JSON.stringify(event.target.stats.sample));
  //console.log(String(event.target.stats.mean));

  
  /*
    console.log(String(event.target.times.elapsed)); 
    6.526
    7.481
  */

})
// run async
.run({'async': true});
