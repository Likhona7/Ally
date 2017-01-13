/*

var PythonShell = require('python-shell');

PythonShell.run('deletFile.py', function (err) {
  if (err) throw err;
  console.log('finished');
});

*/


/*
var PythonShell = require('python-shell');
var pyshell = new PythonShell('spellChecker.py');

// sends a message to the Python script via stdin
//pyshell.send('hello');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
})
*/


//1
var natural = require("natural");
var stemmer = natural.PorterStemmer;

//2
stemmer.attach();

var fStream = require("fs");
var trainerJSON = fStream.readFileSync("trainer.json");

//3
trainerJSON = JSON.parse(trainerJSON);

//4
var classifier = new natural.LogisticRegressionClassifier();

for (var i = 0, len = trainerJSON.length; i < len; i++)
{
  classifier.addDocument(trainerJSON[i].example.tokenizeAndStem(true),
  trainerJSON[i].type);
  console.log(trainerJSON[i].example.tokenizeAndStem(true));
}
classifier.train();


/*
** User Input Promt ---------------------------
*/

var fs      = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var util = require('util');

process.stdin.on('data', function (text)
{
  //console.log('received data:', util.inspect(text));

  console.log('received data:', text);
  if (text === 'quit\n' || text === 'q\n' || text === 'Q\n')
  {
    global.USR_input = text;
    console.log(global.USR_input);
    done();
  }

  var stem = global.USR_input.tokenizeAndStem(true);

 });

 function done()
 {
   console.log('Process Finished.');
   process.exit();
 }

 /*
var stem = msg.tokenizeAndStem(true);
var classification = classifier.classify(stem);

 if (global.USR_input == classification)
 {
       console.log(responsesJSON[i].response);
       socket.emit("message", responsesJSON[i].response);
 }
*/


//<><><><><><><><><><><><><><><><><>
/*

var classification = classifier.classify(stem);

for (var i = 0, len = responsesJSON.length; i < len; i++) {
  if (responsesJSON[i].type == classification)
  {
        console.log(responsesJSON[i].response);
        socket.emit("message", responsesJSON[i].response);
        break;
//          }
 }*/



/*
1
//var app = require("express")();
//var http = require("http").Server(app);
//var io = require("socket.io")(http);

2
//var phonetic = natural.Metaphone;
//phonetic.attach();

3
//var responsesJSON = fStream.readFileSync("responses.json");

4
responsesJSON = JSON.parse(responsesJSON);


*/
