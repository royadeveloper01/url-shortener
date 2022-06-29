const Express = require('express');

const connectDB = require('./config/db');

const app = Express();

const PORT = 5000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at PORT ${PORT}`);
})

