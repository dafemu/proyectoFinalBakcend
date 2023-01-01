import MongoContainer from "../../MongoContainer.js";
import { Item } from "./models/Products.js"; 

class ProductContainer extends MongoContainer {
  constructor () {
    super(Item);
  }

  async getByCategory(id) {
    const arr = await super.getAll();
    
    if (arr.length === 0) {return ({"Error" : "No hay Productos"})} 
    
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].category);
    }
    let arrFilter = await arr.filter(el => el.category == id);
    
    if (arrFilter.length === 0) {return ({"Error" : "No hay Productos para esa categoria"})}
    return arrFilter;
  }
}

export  {ProductContainer};
