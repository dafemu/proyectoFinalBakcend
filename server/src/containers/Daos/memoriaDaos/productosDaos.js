import MemoriaContainer from "../../MemoriaContainer.js";
import {products} from '../../../dataBase/memoria.js';

class ProductContainer extends MemoriaContainer {
  constructor () {
    super(products);
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

export {ProductContainer};
