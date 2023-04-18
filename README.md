# hello-sugar
This guide will walk you through minting NFT's from the Metaplex Sugar CLI, using Candy Machine v3. Compatible with MacOS and Linux distributions.

When it comes to Solana NFT's, the Metaplex standard has become the dominant framework for best practices and outside integration. At the time of writing this guide, Candy Machine v2 had been depricated, and very few guides existed for the use of Candy Machine v3. Feel free to copy and circulate as you see fit!

## Dependencies
#### Be sure to add these to your path globally. 
* [Rust](https://www.rust-lang.org/) - ```curl https://sh.rustup.rs -sSf | sh``` & ```source $HOME/.cargo/env```
* [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools) - ```sh -c "$(curl -sSfL https://release.solana.com/v1.15.1/install)"```
* [Git](https://git-scm.com/) - You should already have this installed, but if not follow the steps for your preferred distribution.
* [Phantom](https://phantom.app/) - Generate a fresh instance of Phantom Wallet in your preferred browser.
* [Metaplex Sample Assets](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTRUZUJrYXVsUTNCQnRrOHJ4eVE5WWRUcF9Td3xBQ3Jtc0ttNDZLMTViWHROc05SNUNFQ25iUlBjODdzRF9RbUhFMGdDQjNtRGVYdEdwNmE5QmVvNGVwZld6eGE3SkI5TkdMY3V3aVRZejNtZ1lLYThjWTBndjRzaWVuY2ZPTTV6UEhHTG96TEpseFFBSDZxZzRNNA&q=https%3A%2F%2Fdocs.metaplex.com%2Fassets%2Ffiles%2Fassets-ff6bd873ecd07b49c86faf3c7aab82d2.zip&v=0KHv1dMV8zU) - This will be our framework for our test launch


## Sugar Installation and NFT Mint
* [Sugar Github](https://github.com/metaplex-foundation/sugar) - ```git clone https://github.com/metaplex-foundation/sugar.git``` & ```sugar --version```
* Generate Wallets - ```solana-keygen new --outfile /Users/<USER>/<WORKING_DIRECTORY>/Owner.json``` & ```solana-keygen new --outfile /Users/<USER>/<WORKING_DIRECTORY>/Creator.json```
* Set Config - ```solana config set --keypair /Users/<USER>/<WORKING_DIRECTORY>/Owner.json``` & ```solana config set --url https://metaplex.devnet.rpcpool.com/```
* This should print the configuration we set above - ```solana config get```
* Fund Wallets - ```solana airdrop 1 <OWNER_ADDRESS>``` & ```solana airdrop 1 <CREATOR_ADDRESS>``` - [Backup Option](https://solfaucet.com/)
* With our sample assets located in our working directory run ```sugar create-config``` and follow the prompts to meet your intended metadata specifications. 
* Next, we will upload our collection to Bundlr with ```sugar upload```
* We can deploy the collection to the blockchain ```sugar deploy```
* Finally we will verify our collection with ```sugar verify``` - Ensure the output is successful
* Our candy machine is now active on Devnet! To mint the first NFT, run ```sugar mint``` or to mint the entire collection run ```sugar mint -n 10``` with 10 being the number of NFT's in the collection.
* Congratulations, you've minted your first Solana NFT on Metaplex. This process is almost identical for Mainnet, with the unique exception of the network configuration. To point your Solana CLI at the Mainnet cluster run ```solana config set --url https://api.mainnet-beta.solana.com``` and for larger collections browse the [list of RPC providers](https://docs.metaplex.com/resources/rpc-providers)

#### Metaplex file types are as follows: 
- `"image" - PNG, GIF, JPG`
- `"video" - MP4, MOV`
- `"audio" - MP3, FLAC, WAV`
- `"vr" - 3D models; GLB, GLTF`
- `"html" - HTML pages`

- Add a URL with the external url value: `"external_url": "https://solflare.com",`



My hope is that this guide will serve as a useful resource during the transition from CMv2 to CMv3. Metaplex is an amazing tool set and a crucial componet of the Solana ecosystem, and as such its adoption and user accesability is key to network growth. 
