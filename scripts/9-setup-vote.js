import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0xb15Dc4F8770a2a55471C4A0d98df1Ec0d91bf6DD"); // vote module address
const tokenModule = sdk.getTokenModule("0x1DF1c1c6Fc1B2F51A1C71EC696031f5B5369c12D");

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);
        console.log(
        "Successfully gave vote module permissions to act on token module"
        );
    } catch (error) {
        console.log("failed to give vote permissions: ", error);
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90 = ownedAmount.div(100).mul(90);

        //transfer 90% to treasury 
        await tokenModule.transfer( voteModule.address, percent90);
        console.log("✅ Successfully transferred tokens to vote module")
    }catch(err){
        console.error("failed to transfer tokens to vote module", err);
    }

})();