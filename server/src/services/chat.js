import '../connection/connection.js';
import {messagesDao} from '../containers/Daos/index.js';

const list = async () => {
  const chat = await messagesDao.list();
  return chat;
}

const save = async (mensaje) => { 
  const newMessage = await messagesDao.save(mensaje);
  return newMessage; 
}

export { list, save };