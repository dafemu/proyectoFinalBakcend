import MemoriaContainer from "../../MemoriaContainer.js";
import {users} from '../../../dataBase/memoria.js';
import bcrypt from "bcrypt";

class UserContainer extends MemoriaContainer {
  constructor() {
    super(users);
  }

  async save(obj){
    try {
      const users = await this.getAll();
      const userExist = users.find(user => user.email === obj.email); 
      if (userExist) {
        return false;
      } else {
        const hashPass = await bcrypt.hash(obj.password, 8);
        obj.password = hashPass;
        const data = await super.save(obj);
        console.log(users);          
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
 

