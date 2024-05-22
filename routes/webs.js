const express = require('express');
const Web = require(__dirname + '/../models/web');

let router = express.Router();

// Servicio de listado
router.get('/', async (req, res) => {
    try {
        const webs = await Web.find();
        res.status(200).send({
            ok: true,
            webs: webs
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error listando webs"
        });
    }
});

module.exports = router;