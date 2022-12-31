import MongoContainer from "../../MongoContainer.js";
import { Message } from "./models/Message.js"; 

class MessageContainer extends MongoContainer {
  constructor () {
    super(Message);
  }
}

export {MessageContainer};       
