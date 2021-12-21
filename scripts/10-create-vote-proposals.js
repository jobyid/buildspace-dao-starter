import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0xb15Dc4F8770a2a55471C4A0d98df1Ec0d91bf6DD"); // vote module address
const tokenModule = sdk.getTokenModule("0x1DF1c1c6Fc1B2F51A1C71EC696031f5B5369c12D");

(async () => {
    try{
        const amount = 420_000;
        //proposal to mint new 420,000 tokens to treasury 
        await voteModule.propose(
            "Should we mint an additional" + amount + " tokens into the treasury?",
            [{
                // Our nativeToken is ETH. nativeTokenValue is the amount of ETH we want
                // to send in this proposal. In this case, we're sending 0 ETH.
                // We're just minting new tokens to the treasury. So, set to 0.
                nativeTokenValue: 0,
                transactionData: tokenModule.contract.interface.encodeFunctionData(
                    "mint",
                    [
                        voteModule.address,
                        ethers.utils.parseUnits(amount.toString(),18),
                    ]
                ),
                toAddress: tokenModule.address,
            },
            ]
        );
        console.log("✅ Successfully created proposal to mint tokens");
    }catch(error){
        console.error("Failed to create proposal", error);
        process.exit(1);
    }

    try {
    const amount = 6_900;
    // Create proposal to transfer ourselves 6,900 token for being awesome.
    await voteModule.propose(
      "Should the DAO transfer " +
      amount + " tokens from the treasury to " +
      process.env.WALLET_ADDRESS + " for being awesome?",
      [
        {
          // Again, we're sending ourselves 0 ETH. Just sending our own token.
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            // We're doing a transfer from the treasury to our wallet.
            "transfer",
            [
              process.env.WALLET_ADDRESS,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),

          toAddress: tokenModule.address,
        },
      ]
    );

    console.log(
      "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create first proposal", error);
  }
})();