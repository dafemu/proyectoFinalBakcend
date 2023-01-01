import '../connection/connection.js';

class MongoContainer {
  constructor(schema) {
    this.schema = schema;    
  }

  async getAll() {
    try {
      const arr = await this.schema.find({});  
      return arr;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {    
    try {
      const el = await this.schema.findOne({ _id: id })     
      return el;
    } catch (err) {
      throw({error: 'elemento no encontrado'});
    }
  }

  async create(obj) {
    try { 
      let timestamp = new Date().getTime();  
      obj.timestamp = timestamp    
      const newObj = new this.schema(obj);
      const data = await newObj.create();  
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {      
      const data = await this.schema.findByIdAndDelete(id)       
      return ('elemento Eliminado')
    } catch (error) {
      console.log(error);
    }
  }

  async changeById(id, obj) {  
    try {
      let timestamp = new Date().getTime();  
      obj.timestamp = timestamp   
      
      const el = await this.schema.findByIdAndUpdate(id, obj)      
      return ('elemento Actualizado') 
    } catch (error) {
      console.log(error);
    }
  }  
  
}

export default MongoContainer;