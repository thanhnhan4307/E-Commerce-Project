const { default: mongoose } = require('mongoose');

const dbConnect = async () => {
    try {
        console.log('Trying to connect to the database...');
        const conn = await mongoose.connect(process.env.MONGODB_URI) 
        if (conn.connection.readyState === 1) {
            console.log('DB connection successfully');
        } else {
            console.log('DB connection established, but not ready');
        }
    } catch (error) {
        console.log('DB connection failed');
        throw error;
    }
};

module.exports = dbConnect
