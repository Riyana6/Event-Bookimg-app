const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const {buildSchema} = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');
const event = require('./models/event');

const app = express();

app.use(bodyParser.json());

app.use(
    '/graphql', 
    graphqlHTTP({
        schema:
        rootValue:,
        graphiql: true       
    })
);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
        process.env.MONGO_PASSWORD
    }@cluster0.m3l4e.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true ,useUnifiedTopology: true }
).then(() => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
});
