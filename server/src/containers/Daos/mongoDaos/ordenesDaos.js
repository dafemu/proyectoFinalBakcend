import MongoContainer from "../../MongoContainer.js";
import { Order } from "./models/Order.js"; 

class OrderContainer extends MongoContainer {
  constructor () {
    super(Order);
  } 

  async save(userId, products, email, username, direccion) {
    let timestamp = new Date().getTime();
    let state = 'generado';
    let obj = { products, userId, email, timestamp, state, username, direccion };  
    const data = await super.save(obj);
    return data;
  } 
}

export  {OrderContainer};