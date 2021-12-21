import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

//membership nft contract addresss 
const bundleDropModule = sdk.getBundleDropModule(
    "0xF0c4C57E8070F4B04E2304712e48996A66B27115" //budle drop address
)

// erc-20 token adress contract 
const tokenModule = sdk.getTokenModule("0x1DF1c1c6Fc1B2F51A1C71EC696031f5B5369c12D");

(async () => {
    try{
        const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");
        if (walletAddresses.length === 0){
            console.log("No NFT's have been claimed yet");
            process.exit(0);
        } 
        //loop through addresses and send tokens 
        const airDropTargets = walletAddresses.map((address)=>{
            //random number of coins to send between 1000 and 10000
            const randomAmount = Math.floor(Math.random() *(10000-1000 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

            //set up the target. 
            const airdropTarget = {
                address, 
                amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
            };
            return airdropTarget;
        });
         // Call transferBatch on all our airdrop targets.
        console.log("🌈 Starting airdrop...")
        await tokenModule.transferBatch(airDropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    } catch (err) {
        console.error("Failed to airdrop tokens", err);
    }
})();