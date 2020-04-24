const { exec } = require("child_process");
fs = require('fs');

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

var end_looper = 1;
var result = 1;
let date_ob = new Date();

fs.appendFile('loop_done.txt', "** START JOB " + date_ob + "\n", function (err) {
    if (err) return console.log(err);
    console.log('loop_done.txt > ' + result);
});

while(end_looper < 9590){
    result = end_looper * 9825803.3029777;
    end_looper++;
}
console.log("Done. Result = " + result + " Number of Loops = " + end_looper);
setTimeout(() => {  console.log("PAUSED"); }, 1000);

fs.appendFile('loop_done.txt', " *********** END JOB " + result + date_ob + "\n", function (err) {
    if (err) return console.log(err);
    console.log('loop_done.txt > ' + result);
});