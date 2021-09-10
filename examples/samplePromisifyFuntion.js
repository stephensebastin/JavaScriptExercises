//to use it in code need to install bluebird
var Promise = require("bluebird");

let myFunc = function(data, callback) {
    // make the result async
        // call the callback with the node style calling convention
        callback(0, data+" from callback");
};

var myFuncAsync = Promise.promisify(myFunc);

myFuncAsync("Hello").then(function(result) {
    console.log("promisified function :: "+ result);
}); 

var fs = Promise.promisifyAll(require('fs'));
/*
// this is how you read a file without promisify
fs.readFile('/Users/stephensebastin/Downloads/work/javascript/studyPurpose/sample,js', function(err, buffer) {
    console.log('fs.readFile: ' + buffer);
});*/

// this is how you read a file without promisify
fs.readFile('/Users/stephensebastin/Downloads/work/javascript/studyPurpose/promiseBluebirdtest.html', function(err, buffer) {
   // console.log(buffer.toString());
/*   setTimeout(() => {
    // script to download the picture here
    if(buffer.toString() != undefined){
    //console.log('fs.readFile: ' + buffer.toString());
    console.log('fs.readFile: ' +" Read Success");
}
}, 3* 1000);*/
if(buffer != undefined){
     console.log('fs.readFile: ' +" Read Success");
}
if(err != undefined && err != null) {
    console.log("fs.readFile: " + err.message);
}
});

// this is the promisified version
/*var promisifiedRead = Promise.promisify(fs.readFile);
promisifiedRead('/Users/stephensebastin/Downloads/work/javascript/studyPurpose/promiseBluebirdtesddt.html')
    .then(function(buffer) {
        if(buffer.toString() != undefined){
            //console.log('fs.readFile: ' + buffer.toString());
            console.log('promisified readFile: ' +" Read Success");
        }
       // console.log('promisified readFile: ' + buffer.toString());
    }).catch(function (error){

        console.log('promisified readFile'+ "   Error Occurred");
    });
    */

    fs.readFileAsync('/Users/stephensebastin/Downloads/work/javascript/studyPurpose/promiseBluebirdtest.html').then(function(buffer) {
        if(buffer.toString() != undefined){
            //console.log('fs.readFile: ' + buffer.toString());
            console.log('promisified readFile: ' +" Read Success");
        }
       // console.log('promisified readFile: ' + buffer.toString());
    }).catch(function (error){

        console.log('promisified readFile'+ "   Error Occurred");
    });