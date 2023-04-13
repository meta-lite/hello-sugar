const fs = require('fs');

let metadata = //Your Metadata Here//;

let counter = 0;

while (counter <= 100) {
  metadata.image = `${counter}.png`;
  metadata.properties.files[0].uri = `${counter}.glb`;
  let jsonOutput = JSON.stringify(metadata, null, 2);
  let fileName = `assets/${counter}.json`; // Update the file name with the desired format
  fs.writeFileSync(fileName, jsonOutput);
  console.log(`Generated metadata file: ${fileName}`);
  counter++;
}
console.log("Metadata generation completed.");
