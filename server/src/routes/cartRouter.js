import {Router} from 'express';
import { getCarts, getCartById, postCart, putCart, dltCart, dltAllFromCart, postProdToCart, dltProdFromCart} from "../controllers/carts.js"; 

const carts = Router();

carts.get("/", getCarts);
carts.get("/:id", getCartById);
carts.post("/", postCart);
carts.put("/:id", putCart);
carts.delete("/:id", dltCart);
carts.delete("/:id/products", dltAllFromCart);
carts.post("/:id/:idProd", postProdToCart);
carts.delete("/:id/:idProd", dltProdFromCart);

export default carts;