import express  from "express";
import routerProducts from './router/products.js';
import routerCarts from './router/carts.js';


const app = express();


app.use(express.json());


app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)




app.listen( 8080, () => {
    console.log('servidor escuchando');
})