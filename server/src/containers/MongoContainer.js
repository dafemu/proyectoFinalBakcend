import '../connection/connection.js';

class MongoContainer {
  constructor(schema) {
    this.schema = schema;    
  }

  async list() {
    try {
      const arr = await this.schema.find({});  
      return arr;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(idEl) {    
    try {
      const el = await this.schema.findOne({ _id: idEl })     
      return el;
    } catch (err) {
      throw({error: 'elemento no encontrado'});
    }
  }

  async save(obj) {
    try { 
      let timestamp = new Date().getTime();  
      obj.timestamp = timestamp    
      const newObj = new this.schema(obj);
      const data = await newObj.save();  
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(idEl) {
    try {      
      const data = await this.schema.findByIdAndDelete(idEl)       
      return ('elemento Eliminado')
    } catch (error) {
      console.log(error);
    }
  }

  async changeById(idEl, obj) {  
    try {
      let timestamp = new Date().getTime();  
      obj.timestamp = timestamp   
      
      const el = await this.schema.findByIdAndUpdate(idEl, obj)      
      return ('elemento Actualizado') 
    } catch (error) {
      console.log(error);
    }
  }  
  
}

export default MongoContainer;