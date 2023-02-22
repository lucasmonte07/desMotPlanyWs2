import express from 'express';
import routerProd from './routes/products.js'
import routerCart from './routes/cart.js'
import { __dirname } from './path.js'
import { engine } from 'express-handlebars'
import * as path from 'path'
import { Server }  from 'socket.io'
import ProductManager from './controllers/PManager.js'

console.log(__dirname)

const app = express();
const PORT = 4000;

const server = app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})

const io = new Server(server)

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.engine("handlebars", engine()) //config hbs
app.set("view engine", "handlebars") // elementos
app.set("views", path.resolve(__dirname,  "./views")) //rutas


//Conexión socket.io
io.on("connection", (socket)=> {
    console.log("conexión con socket")
    
    socket.on('mensaje', info => {    //capura info del cliente
        console.log(info)
    })

    //envio info al cliente según su tipo
    //socket.broadcast.emit('evento-admin', "Hola desde el server, sos el admin")
    //socket.emit('evento-general', "Hola a todos")
})


//Routes
app.use('/api/product', routerProd)
app.use('/api/cart', routerCart)
app.use('/', express.static(__dirname + '/public'))
app.use('/realtimeproducts', express.static(__dirname + '/public'))


//renderizado de productos
const listaprod = new ProductManager()
const productlist = await listaprod.getProduct() 

app.get('/', (req,res) => {
    res.render("home", {
       titulo: "CoderHouse-Home",
       productlist
    })
})

app.get('/realtimeproducts', (req,res) => {
    res.render("realtimeproducts", {
       titulo: "CoderHourse-RealTimeProducts",
       productlist
    })
})
