import ArchivoContainer from "../../ArchivoContainer.js";
const url = './src/dataBase/messages.json'

class MessageContainer extends ArchivoContainer {
  constructor () {
    super(url) 
  }
}

export  {MessageContainer};   
