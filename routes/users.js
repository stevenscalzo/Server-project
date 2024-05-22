const express = require('express');
const bcrypt = require('bcrypt');
const User = require(__dirname + '/../models/user');

const router = express.Router();

// Servicio para actualizar un usuario
router.put('/me', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        user.name = req.body.name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.address = {
            country: req.body.address.country,
            address: req.body.address.address,
            city: req.body.address.city,
            state: req.body.address.state,
            postalCode: req.body.address.postalCode
        }

        await user.save();
        res.send({ message: 'Usuario actualizado correctamente.' });
    } catch (error) {
        res.status(500).send({ error: 'Error al actualizar el usuario. ' + error });
    }
});

// Servicio para actualizar la contraseña del usuario
router.put('/me/password', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        // Actualizar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword;
        await user.save();

        res.send({ message: 'Contraseña actualizada correctamente.' });
    } catch (error) {
        res.status(500).send({ error: 'Error al actualizar la contraseña. ' + error });
    }
});

// Servicio para actualizar el avatar del usuario
router.put('/me/avatar', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password -token');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        user.avatar = req.body.avatar;
        await user.save();

        res.send({ message: 'Avatar actualizada correctamente.' });
    } catch (error) {
        res.status(500).send({ error: 'Error al actualizar la contraseña.' });
    }
});

// Servicio para obtener un usuario por su token
router.get('/me', async (req, res) => {
    try {
        // Obtener el token de autorización del encabezado de la solicitud
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).send({ error: 'Token de autorización no proporcionado.' });

        // Buscar el usuario por el token
        const user = await User.findOne({ token }).select('-password');
        if (!user) return res.status(404).send({ error: 'Usuario no encontrado.' });

        res.status(200).send({
            ok: true,
            user: user
        });
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener el usuario.' });
    }
});


module.exports = router;
