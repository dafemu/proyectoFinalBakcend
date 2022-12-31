import {getInfo} from '../services/info.js';
import { sendInfoLog } from '../logs/logger.js';

const getAllInfo = (req, res) => {
  sendInfoLog(req);
  const data = getInfo();
  res.status(200).send(data);   
}

export {getAllInfo};