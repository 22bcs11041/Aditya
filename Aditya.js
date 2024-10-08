
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling, businesses) {
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling,
        businesses: businesses
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT " + (i + 1) + ":");
        console.log("  Name: " + nfts[i].name);
        console.log("  Eye Color: " + nfts[i].eyeColor);
        console.log("  Shirt Type: " + nfts[i].shirtType);
        console.log("  Bling: " + nfts[i].bling);
        console.log("  Businesses: " + nfts[i].businesses);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT("Deepak", "Brown", "Shirt", "Silver Chain", 4);
mintNFT("Aditya", "Black", "Shaket", "Platinum chain", 5);
mintNFT("Suraj", "Black", "T-Shirt", "Silver Necklace", 2);

listNFTs();

console.log("Total NFTs minted: " + getTotalSupply());
