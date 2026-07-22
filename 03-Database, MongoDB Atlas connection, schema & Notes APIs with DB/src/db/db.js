const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect("mongodb+srv://user-69:VDwBUlePTciTIna8@back-shots.sj13exa.mongodb.net/trial")
    console.log("Connected to DB")
}

module.exports = connectDB