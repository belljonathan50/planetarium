const fs = require('fs');
const readline = require('readline');
const Max = require("max-api");


// Read the JSON file
fs.readFile('/Users/jonathanbell/Desktop/omax-flucoma/flucoma2patchxR/labels.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Count the number of keys
        const numberOfKeys = Object.keys(jsonData).length;
        console.log('Number of keys in the JSON object:', numberOfKeys);
    } catch (error) {
        console.error('Error parsing JSON data:', error);
    }
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){

  // This will be posted to the Max console
  Max.post(`Received ${line} on stdin`);

  // If you run this without Max, this will go to stdout, which is usually
  // the JS console. In a node.script object, this output is redirected to Max
  // with the prefix stdout
  console.log(`Echoing ${line} to stdout`);
});

Max.addHandler('error', function() {

  // This is also routed to Max and gets the prefix stderr
  console.error("Error: Does not compute");
});
