import {getAllCarts, getCart, saveCart, updateCart, deleteCart, saveProdToCart, deleteProdFromCart, saveOrder, getAllOrders, deleteAllFromCart } from '../services/carritos.js';

import {newPurchase, notification} from '../middleware/nodemailer.js';

const getCarts = async (req, res) => {
  try{
    const carts = await getAllCarts();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const getCartById = async (req, res) => {
  try{
    const { id } = req.params;
    const cart = await getCart(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const postCart = async (req, res) => {
  try{
    let { userId, username, email, direccion } = req.body;    
    const cart = await saveCart(userId, username, email, direccion);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const putCart = async (req, res) => {
  try{
    const { id } = req.params;
    let userId = req.body.userId
    const cart = await updateCart(id, userId);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const dltCart = async (req, res) => {
  try{
    const { id } = req.params;
    const cart = await deleteCart(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const postProdToCart = async (req, res) => {
  try{
    const { id, idProd } = req.params;   
    const quantity = req.body.quantity;     
    const cart = await saveProdToCart(id, idProd, quantity);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const dltProdFromCart = async (req, res) => {
  try{
    const { id, idProd } = req.params; 
    const cart = await deleteProdFromCart(id, idProd);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const dltAllFromCart = async (req, res) => {
  try{
    const { id } = req.params;
    const cart = await deleteAllFromCart(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};


const postOrder = async (req, res) => {
  try{
    const { userId, products, email, username, direccion} = req.body;        
    const order = await saveOrder(userId, products, email, username, direccion);
    
    newPurchase(order);    
    notification(order);
    
    res.status(201).send(order);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const getOrders = async (req, res) => {
  try{
    const orders = await getAllOrders();
    res.status(200).send(orders);
  } catch (error) {    
    res.status(500).send({error: error.message});
  }
};

export { postProdToCart, dltProdFromCart };

export { getCarts, getCartById, postCart, putCart, dltCart, dltAllFromCart, postOrder, getOrders }