import {getAll, create, getById, deleteById, changeById} from '../utils/contenedor.js';

class ArchivoContainer {

  constructor(ruta) {
    this.ruta = ruta;    
  }

  async getAll() {    
    const data = await getAll(this.ruta);  
    return data;  
  }

  async getById(x) {
    const data =  await getById(x, this.ruta);
    if (data.error) throw new Error(data.error);
    return data;
  }

  async create(obj) {
    const data = await create(obj, this.ruta);
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