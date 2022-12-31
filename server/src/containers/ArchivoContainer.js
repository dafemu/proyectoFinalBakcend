import {list, save, getById, deleteById, changeById} from '../utils/contenedor.js';

class ArchivoContainer {

  constructor(ruta) {
    this.ruta = ruta;    
  }

  async list() {    
    const data = await list(this.ruta);  
    return data;  
  }

  async getById(x) {
    const data =  await getById(x, this.ruta);
    if (data.error) throw new Error(data.error);
    return data;
  }

  async save(obj) {
    const data = await save(obj, this.ruta);
    return data;
  }

  async deleteById(x) {
    const data = await deleteById(x, this.ruta);  
    return data;
  }

  async changeById(i, object) {
    const data = await changeById(i, object, this.ruta);  
    return data;
  }
}

export default ArchivoContainer;