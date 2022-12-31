import { Router } from "express";
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

import { getProducts, postProduct, getProductById, deleteProductById, updateProductById, getProductByCat } from "../controllers/products.js";

const products = Router();

products.get("/", auth, getProducts);
products.post("/", auth, admin, postProduct);
products.get("/:id", auth, getProductById);
products.get("/category/:id", auth, getProductByCat);
products.delete("/:id", auth, admin, deleteProductById);
products.put("/:id", auth, admin, updateProductById);

export default products;


