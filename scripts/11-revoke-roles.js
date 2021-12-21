import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x1DF1c1c6Fc1B2F51A1C71EC696031f5B5369c12D");

(async() => {
    try {
        // Log the current roles.
        console.log(
            "👀 Roles that exist right now:",
            await tokenModule.getAllRoleMembers()
        );
        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
        console.log(
            "🎉 Roles after revoking ourselves",
            await tokenModule.getAllRoleMembers()
          );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    }catch(error){
        console.error("Failed to revoke ourselves from the DAO treasury", error); 
    }
})();

