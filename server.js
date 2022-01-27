const express = require('express')
const dotenv = require('dotenv');
const Waitlist = require('./models/Waitlist');

const connectDB = require('./config/db');

//load env vars
dotenv.config({ path: './config/config.env' });

//db connection
connectDB();

//route file
const waitlists = require('./routes/waitlist');

const app = express()

//init body parser
app.use(express.json());



//mount routers
app.use('/api/v1/', waitlists);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`Server running on ${PORT}`))

//handle promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(() => process.exit(1));
})