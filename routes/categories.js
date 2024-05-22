const express = require('express');
const Category = require(__dirname + '/../models/category');

let router = express.Router();

// Servicio de listado
router.get('/', async (req, res) => {
    try {
        // Consulta todas las categorías, excluyendo las propiedades _id y __v
        const categories = await Category.find();
        res.status(200).send({
            ok: true,
            categories: categories
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error listando categorias"
        });
    }
});

// Servicio de listado por id
router.get('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id; // Obtiene el id de los parámetros de la solicitud

        // Busca la categoría por el id proporcionado
        const category = await Category.findById(categoryId);

        // Verifica si se encontró la categoría
        if (category) {
            res.status(200).send({
                ok: true,
                category: category
            });
        } else {
            res.status(404).send({
                ok: false,
                error: "Categoría no encontrada"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error buscando categoría: " + error
        });
    }
});


module.exports = router;