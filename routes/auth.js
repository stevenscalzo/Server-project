const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require(__dirname + '/../models/user');
const express = require('express');

let router = express.Router();

// Servicio para añadir un usuario
router.post('/register', async (req, res) => {
    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ error: 'El usuario ya existe.' });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Crear el objeto de usuario con la contraseña encriptada
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            avatar: req.body.avatar
        });

        // Guardar el usuario en la base de datos
        await user.save();
        res.status(201).send({ message: 'Usuario añadido correctamente.' });
    } catch (error) {
        res.status(500).send({ error: 'Error al añadir el usuario:' + error });
    }
});

router.post('/login', async (req, res) => {
    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send({ error: 'Credenciales inválidas.' });

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send({ error: 'Credenciales inválidas.' });

        // Generar token sin firma
        const token = generateToken(user._id); // Función para generar token sin firma

        // Guardar el token en el usuario (si lo deseas)
        user.token = token;
        await user.save();

        // Enviar el token como respuesta
        res.send({ token: token });
    } catch (error) {
        res.status(500).send({ error: 'Error al iniciar sesión. ' + error });
    }
});

// Función para generar un token sin firma
function generateToken(userId) {
    // Construir el payload del token
    const payload = {
        _id: userId,
        // Otros datos que desees incluir en el token
    };

    // Codificar el payload en formato JWT sin firmar
    const token = Buffer.from(JSON.stringify(payload)).toString('base64');

    return token;
}


module.exports = router;