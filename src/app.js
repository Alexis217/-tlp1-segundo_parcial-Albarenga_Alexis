const express = require('express')
const app = express()
const database = require('./db')
app.use(express.json())
app.get('/', (req, res) => res.send('Hola mundo'))

app.get('/products', (req, res) => {
    const products = database
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const product = database.find(product => product.id === id)
    res.json(product)
})

app.post('/products', (req, res) => {
    const {name, quantity, price} = req.body
    const product = {
        id: database.length + 1,
        name,
        quantity,
        price
    }
    database.push(product)
    res.json(message = "Producto creado")
})

app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const {name, quantity, price} = req.body
    const product = database.find(product => product.id === id)
    product.name = name
    product.quantity = quantity
    product.price = price
    res.json(message = "Producto actualizado")
})

app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const product = database.find(product => product.id === id)
    const index = database.indexOf(product)
    database.splice(index, 1)
    res.json(message = "Producto eliminado")
})

app.listen(3000, () => console.log('Servidor del examen escuchando en el puerto 3000'))