const app = require("./app")
require('dotenv').config();

const serverPort = process.env.PORT || 4010
console.log(serverPort)

app.listen(serverPort, ()=>{
    console.log(`Server is running in ${serverPort}`)
})