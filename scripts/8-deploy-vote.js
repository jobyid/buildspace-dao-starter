import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0xa0c79A8F4dF3c19202f406DeC47226D3CA26e5c6");

(async()=> {
    try {
        const voteModule  = await appModule.deployVoteModule({
            name: "A New Hope Governance Proposals",
            votingTokenAddress: "0x1DF1c1c6Fc1B2F51A1C71EC696031f5B5369c12D", //erc20 contract adress
            proposalStartWaitTimeInSeconds:0, //how long to wait before voting can start
            proposalVotingTimeInSeconds:24*60*60, //how long is voting open
            votingQuorumFraction:0,
            minimumNumberOfTokensNeededToPropose:"0",
        });
        console.log("✅ Successfully deployed vote module, address:", voteModule.address,);
    }catch(err){
        console.log("failed to deploy vote module", err)
    }
})();

//vote module, address: 0xb15Dc4F8770a2a55471C4A0d98df1Ec0d91bf6DD