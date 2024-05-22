const express = require('express');
const Order = require(__dirname + '/../models/order');
const router = express.Router();
const User = require(__dirname + '/../models/user');

router.get('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        const orders = await Order.find({ userId: user._id, paid: true }).populate('products.productId');
        
        if (orders) {
            res.status(200).send({
                ok: true,
                orders: orders
            });
        } else {
            res.status(404).send({
                ok: false,
                error: "Pedidos no encontrado"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error buscando pedidos: " + error
        });
    }
});

module.exports = router;
