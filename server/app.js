import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './src/config/config.js';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

import MongoStore from 'connect-mongo';
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cookieParser('secretcode'));
let mongoUrl = config.databaseUrl;

app.use(
  session({
    store: new MongoStore({ 
      mongoUrl: mongoUrl,
      mongoOptions: advanceOptions   
    }),
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: { maxAge: config.time },
  })
);

app.use(passport.initialize());
app.use(passport.session());

import {router} from './src/routes/index.js';

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

import { getChat, sendMessage } from './src/controllers/chat.js';

io.on('connection', async function(socket) {
  console.log('Cliente activo'); 
  const messages = await getChat();
  socket.emit('messages', messages);
  socket.on ('new-message', async function (data){  
    sendMessage(data)
    .then(async (newMessage) => {             
      const messages = await getChat();
      io.sockets.emit('messages', messages);
    })
  });
});

const port = config.port;

httpServer.listen(port, () => {
  console.log(`Servidor arriba en el puerto: ${port}`);
});

export default app;
