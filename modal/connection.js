const mongoose = require("mongoose");

async function dbConnection()
{ 
    let uri = process.env.MONGODB_URI || "mongodb://localhost:27017/bloger"
    try{
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000, 
        }) 
    }
    catch(error)
    {
        throw error
    }
}

dbConnection()



module.exports = dbConnection