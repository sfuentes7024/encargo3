const express = require('express');
const app = express();
const Container = require("./container.js").Container;

const PORT = 8082;

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo'})
});

app.get('/productos', async (req, res) => {

    let contenedor = new Container("./products.txt");
    
    const productsList = await contenedor.getAll();
    console.log(productsList);
    res.send({ productsList });
});

app.get('/productoRandom', async (req, res) =>{

    let contenedor = new Container("./products.txt");
    
    let min = 1;
    let max = 4;

    let id = Math.floor(Math.random() * (max - min + 1) + min);

    response = await contenedor.getById(id);

        res.send(response);

});

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
});

server.on("Error", error => console.log(`Error en servidor $(error)`));
