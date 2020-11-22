const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const {mongoConfig} = require("./config");
const appsRouter = require('./src/api/appsRouter');

const PORT = process.env.PORT || 5000;
const server = express();

server.use(cors({
    credentials: true,
    origin: '*'
}));
server.use(bodyParser.json());
server.use('/apps', appsRouter);

const start = async () => {
    try{
        await mongoose.connect(mongoConfig.connectionAddress);
        server.listen(PORT, () => (
            console.log(`server started on port ${PORT}`)
        ));
    } catch(err){
        console.log(err);
    }
}

start();