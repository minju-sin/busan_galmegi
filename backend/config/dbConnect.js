const mongoose = require("mongoose");
require("dotenv").config();

// async, await 비동기 처리를 이용한 DB 연결
const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connect");
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;