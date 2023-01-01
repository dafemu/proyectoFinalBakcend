import MongoContainer from "../../MongoContainer.js";
import {User} from "./models/User.js";
import bcrypt from "bcrypt";

class UserContainer extends MongoContainer {
  constructor() {
    super(User);
  }

  async create(obj) {
    try {
      const userExist = await User.findOne({email: obj.email});
      if (userExist) {
        return false;
      } else {
        const hashPass = await bcrypt.hash(obj.password, 8);
        obj.password = hashPass;
        const data = await super.create(obj);
        return data;
      }      
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail (email) {
    try {
      const userExist = await User.findOne  ({email: email });
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
 

