const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;