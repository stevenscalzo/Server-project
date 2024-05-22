const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

// Enrutadores
const users = require(__dirname + '/routes/users');
const categories = require(__dirname + '/routes/categories');
const products = require(__dirname + '/routes/products');
const auth = require(__dirname + '/routes/auth');
const webs = require(__dirname + '/routes/webs');
const cart = require(__dirname + '/routes/cart');
const orders = require(__dirname + '/routes/orders');

// Conexión con la BD
mongoose.connect('mongodb://localhost:27017/proyect',
    { useNewUrlParser: true });
let app = express();

// Carga de middleware y enrutadores
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/user', users);
app.use('/categories', categories);
app.use('/products', products);
app.use('/auth', auth);
app.use('/webs', webs);
app.use('/cart', cart);
app.use('/orders', orders);

const insertData = require(__dirname + '/load/data');

// Puesta en marcha del servidor
app.listen(8080);