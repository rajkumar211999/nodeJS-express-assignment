const fs = require("fs");

var file =fs.readFileSync("writeMe.txt", "utf8");

var arr = file.split('\n');


var count = 0;

for(var i=0;i<arr.length;i++){

    if(arr[i].includes("lets")) {

        count += 1;

    }

}

console.log(count);