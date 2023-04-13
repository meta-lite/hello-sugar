const fs = require('fs');

let metadata = {
  "name": "SolanaArtProject #1",
  "description": "Generative art on Solana.",
  "image": "https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg",
  "animation_url": "https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb",
  "external_url": "https://example.com",
  "attributes": [
    {
      "trait_type": "trait1",
      "value": "value1"
    },
    {
      "trait_type": "trait2",
      "value": "value2"
    }
  ],
  "properties": {
    "files": [
      {
        "uri": "https://www.arweave.net/abcd5678?ext=png",
        "type": "image/png"
      },
      {
        "uri": "https://watch.videodelivery.net/9876jkl",
        "type": "unknown",
        "cdn": true
      },
      {
        "uri": "https://www.arweave.net/efgh1234?ext=mp4",
        "type": "video/mp4"
      }
    ],
    "category": "video",
    "collection": {
      "name": "Solflare X NFT",
      "family": "Solflare"
    },
    "creators": [
      {
        "address": "xEtQ9Fpv62qdc1GYfpNReMasVTe9YW5bHJwfVKqo72u",
        "share": 100
      }
    ]
  }
};

let counter = 1;

while (counter <= 100) {
  metadata.name = `SolanaArtProject #${counter}`;
  let jsonOutput = JSON.stringify(metadata, null, 2);
  let fileName = `mata/${counter}.json`; // Update the file name with the desired format
  fs.writeFileSync(fileName, jsonOutput);
  console.log(`Generated metadata file: ${fileName}`);
  counter++;
}
console.log("Metadata generation completed.");
