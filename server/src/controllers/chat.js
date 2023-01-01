import '../connection/connection.js'; 
import { getAll, save } from '../services/chat.js';

const getChat = async () => {
  const messages = await getAll();  
  return messages;
}

const sendMessage = async (data) => {  
  const newMessage = await save(data);
  return newMessage;
}

export { getChat, sendMessage };



