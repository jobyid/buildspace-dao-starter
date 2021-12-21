import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x1DF1c1c6Fc1B2F51A1C71EC696031f5B5369c12D");
(async () => {
    try {
        //token max supply 
        const amount = 1_000_000_000_000;
        //convert to 18 decimals 
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        //mint the tokens
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        // Print out how many of our token's are out there now!
        console.log(
        "✅ There now is",
        ethers.utils.formatUnits(totalSupply, 18),
        "$JEDI in circulation",
        );
    }catch(error) {
        console.error("Failed to print money", error);
    }
})();