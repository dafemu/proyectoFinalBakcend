import '../connection/connection.js';
import {messagesDao} from '../containers/Daos/index.js';

const getAll = async () => {
  const chat = await messagesDao.getAll();
  return chat;
}

const save = async (mensaje) => { 
  const newMessage = await messagesDao.save(mensaje);
  return newMessage; 
}

export { getAll, save };