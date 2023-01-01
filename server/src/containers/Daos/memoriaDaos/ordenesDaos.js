import MemoriaContainer from "../../MemoriaContainer.js";
import {orders} from '../../../dataBase/memoria.js';

class OrderContainer extends MemoriaContainer {
  constructor () {
    super(orders);
  } 

  async create(userId, products, email, username, direccion) {  
    let timestamp = new Date().getTime();
    let state = 'generado';
    let obj = { products, userId, email, timestamp, state, username, direccion };   
    const data = await super.create(obj);
    return data;
  } 
}

export  {OrderContainer};