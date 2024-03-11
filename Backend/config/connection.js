const mongoose =require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(`${process.env.MONGOSHURL}ideaclan`);

module.exports={connection}