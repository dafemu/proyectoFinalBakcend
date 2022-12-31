import { sendInfoLog } from '../logs/logger.js';

const getUsuario = async (req, res) => {
  sendInfoLog(req);
  res.send(req.user);
}

export { getUsuario };