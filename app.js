const express = require('express');
const { default: mongoose } = require('mongoose');
const morgan = require('morgan');
const RouteAcc = require('./routes/accountRoute');
const RouteUser = require('./routes/userRoutes');
require('dotenv').config();
const app = new express();

app.use(morgan('common'));
app.use(express.json());
mongoose.connect(process.env.URL, (err) => {
    if (err) return console.log('Ket noi voi database loi');
    console.log("Ket noi thanh cong");
});

app.use('/account', RouteAcc);
app.use('/user',RouteUser);
app.use('/a', () => {
    console.log('hii')
});

app.listen(process.env.PORT || 80, () => {
    console.log('Server is running port: ' + process.env.PORT);
});