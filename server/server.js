const app = require("./src/app");
require("dotenv").config();
const ConnectDB = require("./src/db/db");

ConnectDB();
app.listen(3001, () => {
  console.log("Your Server is Running on Port 3001");
});
