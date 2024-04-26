require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    console.log('conexao pronta');
    app.emit('ready');
}).catch( e => console.log(e));


//session
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const middleware = require('./middlewares/middleware');

app.use(middleware.middlewareGlobal);

const sessionOptions = session({
    secret: '1234',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 //7 dias em ms
        , httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.use(routes);
app.on('ready', ()=>{
    app.listen(3000, ()=>{
        console.log('server on, http://localhost:3000');
    })
});