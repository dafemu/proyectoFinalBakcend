import config from '../config/config.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

try {
  const URL = config.databaseUrl
  mongoose.connect(URL);
  console.log('Base de datos arriba');
} catch (error ) {
  console.log(error);
}    