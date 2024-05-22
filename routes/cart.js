const express = require('express');
const User = require(__dirname + '/../models/user');
const Cart = require(__dirname + '/../models/order');
const Product = require(__dirname + '/../models/product');
const router = express.Router();

router.delete('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        const cart = await Cart.findOneAndDelete({ userId: user._id, paid: false });

        if (cart) {
            res.status(200).send({
                ok: true,
                message: 'Carrito eliminado correctamente.'
            });
        } else {
            res.status(404).send({
                ok: false,
                error: "Carrito no encontrado ni eliminado"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error eliminado el carrito: " + error
        });
    }
});

router.post('/add', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        let newProduct = {
            productId: req.body.product._id,
            price: req.body.product.price,
            qty: req.body.qty
        };

        let cart = await Cart.findOne({ userId: user._id, paid: false });

        if (cart) {
            const existingProductIndex = cart.products.findIndex(product => String(product.productId) === newProduct.productId);

            if (existingProductIndex !== -1) {
                // El producto ya existe en el carrito, actualizar la cantidad
                cart.products[existingProductIndex].qty += newProduct.qty;
            } else {
                // El producto no está en el carrito, añadirlo
                cart.products.push(newProduct);
            }

            cart.total += (newProduct.qty * newProduct.price);

            await cart.save();
        } else {
            newCart = new Cart({
                userId: user._id,
                createdAt: Date.now(),
                products: [newProduct],
                total: (req.body.qty * req.body.product.price),
                paid: false
            });

            await newCart.save();
        }

        res.status(200).send({
            ok: true,
            message: 'Carrito actualizado correctamente.'
        });
    } catch (error) {
        res.status(500).send({ error: 'Error al guardar el carrito. ' + error });
    }
});

router.put('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        let cart = await Cart.findOne({ userId: user._id, paid: false });

        if (!cart) return res.status(404).send({ error: 'Carrito no encontrado.' });

        let products = [];
        let total = 0;

        req.body.products.forEach(element => {
            products.push({
                productId: element.productId,
                title: element.title,
                price: element.price,
                imageUrl: element.imageUrl,
                qty: element.qty
            });

            total += (element.price * element.qty);
        });

        cart.products = products;
        cart.total = total;

        await cart.save();

        res.status(200).send({
            ok: true,
            message: 'Carrito actualizado correctamente.'
        });
    } catch (error) {
        res.status(500).send({ error: 'Error al guardar el carrito. ' + error });
    }
});

router.get('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        const cart = await Cart.findOne({ userId: user._id, paid: false }).populate('products.productId');

        if (cart) {
            res.status(200).send({
                ok: true,
                cart: cart
            });
        } else {
            res.status(404).send({
                ok: false,
                error: "Carrito no encontrado"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error buscando el carrito: " + error
        });
    }
});

router.post('/paid', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        const cart = await Cart.findOne({ userId: user._id, paid: false });
        if (!cart) return res.status(404).send({ error: 'Carrito no encontrado.' });

        cart.products.forEach(async cartProduct => {
            const product = await Product.findById(cartProduct.productId);
            if (!product) return res.status(404).send({ error: 'Producto no encontrado.' });

            product.qty -= cartProduct.qty;
            await product.save();
        }) 
       
        cart.paid = true;
        cart.paidAt = Date.now();

        await cart.save();

        res.status(200).send({
            ok: true,
            message: 'Pedido realizado correctamente.'
        });

    } catch (error) {
        res.status(500).send({ error: 'Error al actualizar el usuario. ' + error });
    }
});

module.exports = router;
