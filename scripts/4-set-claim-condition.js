import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xF0c4C57E8070F4B04E2304712e48996A66B27115" //bundle drop address
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1,
        });
        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("Succesfully set claim condition");
    }catch(error){
        console.error("Failed to set claim condition", error)
    }
})()
