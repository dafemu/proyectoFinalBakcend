import { cartsDao } from "../containers/Daos/index.js";
import {ordersDao} from "../containers/Daos/index.js";
import { productsDao } from "../containers/Daos/index.js";

const getAllCarts = async () => {
  const data = await cartsDao.getAll();
  return data;
};

const getCart = async (id) => {  
  const data = await cartsDao.getById(id);
  return data;
};

const saveCart = async (userId, username, email, direccion) => {
  const data = await cartsDao.save(userId, username, email, direccion);
  return data;
};

const updateCart = async (id, userId) => {
  const data = await cartsDao.changeById(id, userId);
  return data;
};

const deleteCart = async (id) => {
  const data = await cartsDao.deleteById(id);
  return data;
};

const saveProdToCart = async (idCarrito, idProducto, quantity  ) => {
  const cart = await cartsDao.getById(idCarrito);  
  const product = cart.products.find( product => product._id == idProducto );
  if (product) {    
    const data = await cartsDao.updateProduct(idCarrito, idProducto, quantity);
    return data;
  } 
  else {
    const producto = await productsDao.getById(idProducto);
    producto.quantity = quantity;
    const data = await cartsDao.addProduct(idCarrito, producto );
    return data;
  }
}

const deleteProdFromCart = async (idCarrito, idProducto) => {
  const data = await cartsDao.deleteProduct(idCarrito, idProducto);
  return data;
};

const deleteAllFromCart = async (idCarrito) => {
  const data = await cartsDao.deleteAllProducts(idCarrito);
  return data;
};

const saveOrder = async (userId, products, email, username, direccion) => {
  const data = await ordersDao.save(userId, products, email, username, direccion);   
  return data;
};

const getAllOrders = async () => {    
  const data = await ordersDao.getAll();
  return data;
};

export { getAllCarts, getCart, saveCart, updateCart, deleteCart, saveProdToCart, deleteProdFromCart, saveOrder, getAllOrders, deleteAllFromCart }; 
