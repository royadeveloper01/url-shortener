const express = require('express');

const connectDB = require('./config/db');

const app = express();

const indexRoutes = require('./routes/index');
const urlRoutes = require('./routes/url');

app.use(express.json({ extended: false }));

// Define Routes
app.get('/', (req, res) => {
    res.send('Welcome to URL Shortener API');
});
app.use('/', indexRoutes);
app.use('/api/url', urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    // Connect to Database
    connectDB();

    console.log(`Server is running on PORT ${PORT}`);
})

