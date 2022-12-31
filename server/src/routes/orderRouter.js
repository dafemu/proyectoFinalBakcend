import {Router} from 'express';
import { postOrder, getOrders } from "../controllers/carts.js"; 

const orders = Router();

orders.post("/", postOrder);
orders.get("/", getOrders);

export default orders;