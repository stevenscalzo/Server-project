const express = require('express');
const Country = require(__dirname + '/../models/country');

let router = express.Router();

// Servicio de listado
router.get('/', async (req, res) => {
    try {
        const countries = await Country.find();
        res.status(200).send({
            ok: true,
            countries: countries
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error listando los paises"
        });
    }
});

module.exports = router;