import config from '../../config/config.js'

let usersDao;
let productsDao;
let messagesDao;
let cartsDao;
let ordersDao;

const PERS = config.database;

switch (PERS) {
  case "mongodb":    
    const ProductContainer = await (async () => {let {ProductContainer} = await import('./mongoDaos/productosDaos.js'); return ProductContainer})();     
    const MessageContainer = await (async () => {let {MessageContainer} = await import('./mongoDaos/messageDaos.js'); return MessageContainer})();
    const UserContainer = await (async () => {let {UserContainer} = await import('./mongoDaos/usuariosDaos.js'); return UserContainer})();
    const CartContainer = await (async () => {let {CartContainer} = await import('./mongoDaos/carritosDaos.js'); return CartContainer})();
    const OrderContainer = await (async () => {let {OrderContainer} = await import('./mongoDaos/ordenesDaos.js'); return OrderContainer})();

    
    productsDao = new ProductContainer();
    messagesDao = new MessageContainer();
    usersDao = new UserContainer(); 
    cartsDao = new CartContainer(); 
    ordersDao = new OrderContainer();  
    break;

  case "memoria":
    const ProductosDaoMemoria = await (async () => {let {ProductContainer} = await import('./memoriaDaos/productosDaos.js'); return ProductContainer})();
    const MensajesDaoMemoria = await (async () => {let {MessageContainer} = await import('./memoriaDaos/messageDaos.js'); return MessageContainer})();
    const UsuariosDaoMemoria = await (async () => {let {UserContainer} = await import('./memoriaDaos/usuariosDaos.js'); return UserContainer})();
    const CarritosDaoMemoria = await (async () => {let {CartContainer} = await import('./memoriaDaos/carritosDaos.js'); return CartContainer})();
    const OrdenesDaoMemoria = await (async () => {let {OrderContainer} = await import('./memoriaDaos/ordenesDaos.js'); return OrderContainer})();

    productsDao = new ProductosDaoMemoria();
    messagesDao = new MensajesDaoMemoria();
    usersDao = new UsuariosDaoMemoria();    
    cartsDao = new CarritosDaoMemoria();
    ordersDao = new OrdenesDaoMemoria();
    break;

  case 'json':
    const ProductosDaoJson = await (async () => {let {ProductContainer} = await import('./archivoDaos/productosDaos.js'); return ProductContainer})();
    const MensajesDaoJson = await (async () => {let {MessageContainer} = await import('./archivoDaos/messageDaos.js'); return MessageContainer})();
    const UsuariosDaoJson = await (async () => {let {UserContainer} = await import('./archivoDaos/usuariosDaos.js'); return UserContainer})();
    const CarritosDaoJson = await (async () => {let {CartContainer} = await import('./archivoDaos/carritosDaos.js'); return CartContainer})();
    const OrdenesDaoJson = await (async () => {let {OrderContainer} = await import('./archivoDaos/ordenesDaos.js'); return OrderContainer})();

    productsDao = new ProductosDaoJson();
    messagesDao = new MensajesDaoJson();
    usersDao = new UsuariosDaoJson();
    cartsDao = new CarritosDaoJson();
    ordersDao = new OrdenesDaoJson();
    break;
  
}

export { usersDao, productsDao, messagesDao, cartsDao, ordersDao };