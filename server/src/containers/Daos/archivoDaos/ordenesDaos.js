import ArchivoContainer from "../../ArchivoContainer.js";
const url = './src/dataBase/orders.json'

class OrderContainer extends ArchivoContainer {
  constructor () {
    super(url);
  } 

  async create(userId, products, email, username, direccion) {
    let timestamp = new Date().getTime();
    let state = 'generado';
    let obj = {products, userId, email, timestamp, state, username, direccion};   
    const data = await super.create(obj);
    return data;
  } 
}

export  {OrderContainer};