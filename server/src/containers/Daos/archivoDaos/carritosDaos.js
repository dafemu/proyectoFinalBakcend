import ArchivoContainer from "../../ArchivoContainer.js";
const url = './src/dataBase/carts.json'

class CartContainer extends ArchivoContainer {
  constructor () {
    super(url) 
  }

  async create(userId, username, email, direccion) {    
    let obj = {userId, username, email, direccion, products: []}
    const data = await super.create(obj);
    return data;
  }
 
  async addProduct(idCart, product) {  
    try {  
      const arr = await super.getAll();    
      let indexCart = arr.findIndex(el => el._id == idCart);
      arr[indexCart].products.push(product); 
      const data = await super.changeById(idCart, arr[indexCart]);
      return data;                     
    } 
    catch (err) {      
      throw new Error('Error de escritura', err);
    }  
  } 
   
  async deleteProduct(idCart, idProduct) {
    try {
      const arr = await super.getAll();
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})};
  
      let indexCart = arr.findIndex(el => el._id == idCart);
      if (indexCart == -1) {
        return ({ error: 'No existe el carrito' });
      }
      
      let indexProduct = arr[indexCart].products.findIndex(el => el._id == idProduct);
      if (indexProduct == -1) {
        return ({ error: 'No existe el producto' });
      }
      
      arr[indexCart].products.splice(indexProduct, 1);  
      
      await super.changeById(idCart, arr[indexCart]);
      return "Producto Eliminado";
    } 
    catch (err) {
      throw new Error('Error de escritura', err);
    }
  }

  async updateProduct(idCart, idProduct, quantity) {
    try {
      const arr = await super.getAll();
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})};

      let indexCart = arr.findIndex(el => el._id == idCart);
      if (indexCart == -1) {
        return ({ error: 'Carrito no existe' });
      }

      let indexProduct = arr[indexCart].products.findIndex(el => el._id == idProduct);
      if (indexProduct == -1) {
        return ({ error: 'Producto no existe' });
      }

      arr[indexCart].products[indexProduct].quantity += quantity;

      await super.changeById(idCart, arr[indexCart]);
      return "Producto editado";
    }
    catch (err) {
      throw new Error('Error de escritura', err);
    }
  }
  

  async deleteAllProducts(idCart) {
    try {
      const arr = await super.getAll();
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})};
  
      let indexCart = arr.findIndex(el => el._id == idCart);
      if (indexCart == -1) {
        return ({ error: 'No existe el carrito' });
      }        
      
      arr[indexCart].products = [];
      await super.changeById(idCart, arr[indexCart]);
      return "Productos Eliminados";
    } 
    catch (err) {
      throw new Error('Error de escritura', err);
    }
  } 
}

export {CartContainer};


