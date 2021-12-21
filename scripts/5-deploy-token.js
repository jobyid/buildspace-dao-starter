import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xa0c79A8F4dF3c19202f406DeC47226D3CA26e5c6");

(async () => {
    try {
        //standar erc20 contract 
        const tokenModule = await app.deployTokenModule({
            name: "New Hope Governance token",
            symbol: "JEDI",
        });
        console.log("✅ Successfully deployed token module, address:",
      tokenModule.address,)
    }catch(error){
        console.error("Failed to deploy token module", error)
    }
})();