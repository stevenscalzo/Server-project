const express = require('express');
const Product = require(__dirname + '/../models/product');
const router = express.Router();

// Servicio de listado de productos por id de categoría
router.get('/category/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        // Busca todos los productos de la categoría especificada
        const products = await Product.find({ category: categoryId }).populate('web');

        // Verifica si se encontraron productos
        if (products.length > 0) {
            res.status(200).send({
                ok: true,
                products: products
            });
        } else {
            res.status(404).send({
                ok: false,
                error: "No se encontraron productos para la categoría especificada"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error buscando productos: " + error
        });
    }
});

// Servicio de obtener producto por id
router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;

        // Busca el producto por el id proporcionado
        const product = await Product.findById(productId).populate('web');

        // Verifica si se encontró el producto
        if (product) {
            res.status(200).send({
                ok: true,
                product: product
            });
        } else {
            res.status(404).send({
                ok: false,
                error: "Producto no encontrado"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error buscando producto: " + error
        });
    }
});

// Servicio de obtener producto por texto
router.get('/search/:text', async (req, res) => {
    try {
        const text = req.params.text;

        // Busca productos cuyo título o descripción contengan el texto proporcionado
        const products = await Product.find({
            $or: [
                { title: { $regex: text, $options: 'i' } }, // Búsqueda por título (ignorando mayúsculas y minúsculas)
                { description: { $regex: text, $options: 'i' } } // Búsqueda por descripción (ignorando mayúsculas y minúsculas)
            ]
        }).populate('web');

        // Verifica si se encontró el producto
        if (products.length > 0) {
            res.status(200).send({
                ok: true,
                products: products
            });
        } else {
            res.status(200).send({
                ok: false,
                error: "No se encontraron productos para la categoría especificada"
            });
        }
    } catch (error) {
        res.status(500).send({
            ok: false,
            error: "Error buscando producto: " + error
        });
    }
});

module.exports = router;
