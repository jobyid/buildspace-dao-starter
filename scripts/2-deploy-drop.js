import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";


const app = sdk.getAppModule("0xa0c79A8F4dF3c19202f406DeC47226D3CA26e5c6");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "New Hope DAO Membership",
            description: "A DAO to chnage the world, in one way or an other",
            image: readFileSync("scripts/assets/hope.png"),
            // make it free but could put an address here. 
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log("✅ Successfully deployed bundleDrop module, address:", bundleDropModule.address,);
        console.log("✅ bundleDrop metadata:", await bundleDropModule.getMetadata(),);
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()