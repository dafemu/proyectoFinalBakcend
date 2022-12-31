import { sendInfoLog } from '../logs/logger.js';

const postLogin = (req, res) => {
  sendInfoLog(req);
  console.log(req.user);
  res.status(200).send({message: 'Login exitoso'});
}

export { postLogin };