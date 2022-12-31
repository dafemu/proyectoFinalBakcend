import dotenv from 'dotenv';
dotenv.config();

let config={
  url: '',
  database: '',
  databaseUrl: '',
  mail: '',
  port: '',
  time: ''
}

if (process.env.NODE_ENV === 'development') {
  config.url = "http://localhost:3000";
  config.database = 'json';
  config.databaseUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';
  config.mail = 'david.mb93@gmail.com';
  config.port = 8080;
  config.time = 600000;

} else {
  config.url = "https://myapp.herokuapp.com";
  config.database = 'mongodb';
  config.databaseUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';
  config.mail = 'david.mb93@gmail.com';
  config.port = process.env.PORT || 8080;
  config.time = 900000;
}

export default config;









