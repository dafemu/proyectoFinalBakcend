import '../connection/connection.js'; 
import { getAll, create } from '../services/chat.js';

const getChat = async () => {
  const messages = await getAll();  
  return messages;
}

const sendMessage = async (data) => {  
  const newMessage = await create(data);
  return newMessage;
}

export { getChat, sendMessage };



