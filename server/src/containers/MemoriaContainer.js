class MemoriaContainer {

  constructor(arr) {
    this.arr = arr
  }    

  async list() { 
    const arr = this.arr   
    return arr;  
  }

  async getById(i) {  
    if (this.arr === 0) {return "BD empty"}
    let index = this.arr.findIndex(x => x._id == i);

    if (index == -1) {
      return ({ error: 'Producto no existe' });
    } else {
      return this.arr[index];      
    }  
  }  

  async save(obj) {
    let timestamp = new Date().getTime(); 
    let id;

    if (this.arr.length === 0) {
      id = 1;
    } else {
      id = this.arr.length + 1;
    }

    obj._id = id;
    obj.timestamp = timestamp;
     
    this.arr.push(obj);  
    return(obj);    
  }

  async deleteById(i) {
    let index = this.arr.findIndex(x => x._id == i);
    if (index == -1) {
      return "No existe el id";
    } else {
      this.arr.splice(index, 1)      
      return "Elemento Eliminado";
    }
  }

  async changeById(i, object) {
    let index = this.arr.findIndex(x => x._id == i);

    if (index == -1) {
      return ({ error: 'No existe el producto' });
    } 

    object._id = i;
    object.timestamp = this.arr[index].timestamp;   
    const editedProduct = {...this.arr[index], ...object};   
    this.arr[index] = editedProduct;
    return "Producto editado";
  }
} 

export default MemoriaContainer;