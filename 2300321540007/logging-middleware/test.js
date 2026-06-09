const Log= require("./logger");
const config = require("./config");
console.log(config);
(async()=>{
    console.log(
        await Log(
            "backend",
            "info",
            "middleware",
            "logging middleware initalized"
        )
    )
})();