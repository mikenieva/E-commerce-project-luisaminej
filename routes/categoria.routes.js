const router = require("express").Router()

const bcryptjs = require("bcryptjs")

const mongoose = require("mongoose")

const Categoria = require('./../models/Categoria.model')

const Productos = require('./../models/Productos.model')





//Se crea la ruta  para ver las categorias
router.get("/categoria", (req, res) => { 

    Categoria.find({})
        .then((encontrarCategoria) => {
            console.log(encontrarCategoria)
                res.render("categoria", {
                    categoria: encontrarCategoria
                })
        }) 
        .catch(e => console.log(e))
})
//Crear la ruta para la categoría con sus productos

router.get("/categoria/:categoriaId", (req, res) => {
    ///obtener id . findbyid
    
    const { categoriaId } = req.params
    Categoria.findById(categoriaId)
        .populate("productos")
        .then(categoriaEncontrada => {
            console.log(`Categoria Encontrada:`, categoriaEncontrada)
            res.render("categprod", {
                categoria: categoriaEncontrada
                
            })

        }) 

    })

    


module.exports = router