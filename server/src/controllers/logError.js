import { sendInfoLog } from '../logs/logger.js';

const getLogError = (req, res) => {
  sendInfoLog(req);
  res.status(400).send({error: 'Usuario o contraseña incorrectos', name:'login', url: 'auth/login'});  
};

export { getLogError };