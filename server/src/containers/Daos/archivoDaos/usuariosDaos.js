import ArchivoContainer from "../../ArchivoContainer.js";
import bcrypt from "bcrypt";

const url = './src/dataBase/users.json'

class UserContainer extends ArchivoContainer {
  constructor() {
    super(url);
  }

  async save(obj) {
    try {
      const users = await this.getAll();
      const userExist = users.find(user => user.email === obj.email); 
      if (userExist) {
        return false;
      } else {
        const hashPass = await bcrypt.hash(obj.password, 8) 
        obj.password = hashPass;
        const data = await super.save(obj);
        return data;
      }      
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail (email) {
    try {
      const users = await this.getAll();
      const userExist = users.find(user => user.email === email);
      if (userExist) { 
        return userExist;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export {UserContainer};
 

