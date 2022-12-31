import MemoriaContainer from "../../MemoriaContainer.js";
import {messages} from '../../../dataBase/memoria.js';

class MessageContainer extends MemoriaContainer {
  constructor () {
    super(messages);
  }
}

export {MessageContainer};   
