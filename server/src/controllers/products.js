import {getAllProducts, getProduct, saveProduct, updateProduct, deleteProduct, getProductByCategory} from '../services/productos.js';
import { sendInfoLog } from '../logs/logger.js';

const getProducts = async (req, res) => {
  sendInfoLog(req);
  try{
    const productos = await getAllProducts();
    res.status(200).send(productos);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const getProductByCat = async (req, res) => {
  sendInfoLog(req);
  try{
    const { id } = req.params;
    const productos = await getProductByCategory(id);    
    res.status(200).send(productos);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const getProductById = async (req, res) => {
  sendInfoLog(req);
  try{
    const { id } = req.params;
    const producto = await getProduct(id);      
    res.status(200).send(producto);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const postProduct = async (req, res) => { 
  try {
    const {name, description, code, thumbnail, price, stock, category} = req.body 
    const product = await saveProduct({name, description, code, thumbnail, price, stock, category});    
    res.status(201).send(product);   
  }
  catch (error) {
    console.log(error);
  }  
}

const deleteProductById = async (req, res) => {
  sendInfoLog(req);
  try{
    const { id } = req.params;
    const producto = await deleteProduct(id);
    res.status(200).send(producto);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

const updateProductById = async (req, res) => {
  sendInfoLog(req);
  try{
    const { id } = req.params;
    const {name, description, code, thumbnail, price, stock, category} = req.body
    const producto = await updateProduct(id, {name, description, code, thumbnail, price, stock, category});
    res.status(200).send(producto);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

export { getProducts, postProduct, getProductById, deleteProductById, updateProductById, getProductByCat };


    
 

