import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xF0c4C57E8070F4B04E2304712e48996A66B27115" //budle drop address
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "A vision of hope",
                description: "This NFT will give you access to New Hope DAO",
                image: readFileSync("scripts/assets/A_New_Hope_poster.jpg")
            },
        ]);
        console.log("Succesfully created a new NFT in the drop!");
    }catch(error){
        console.error("Failed to create the new nft", error)
    }
})()
