import '../connection/connection.js';
import {messagesDao} from '../containers/Daos/index.js';

const getAll = async () => {
  const chat = await messagesDao.getAll();
  return chat;
}

const create = async (mensaje) => { 
  const newMessage = await messagesDao.create(mensaje);
  return newMessage; 
}

export { getAll, create };