const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("Hola mundo de los Servidores Web");
})

app.get("*", (req,res) => {
    res.send("404 | Página no encontrada");
})

app.get("/productos", (req,res) => {
    res.send("aqui estaria la pagina de productos");
})

const port =process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto http://localhost:${port}`);
})