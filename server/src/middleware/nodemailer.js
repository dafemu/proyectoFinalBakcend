import { createTransport } from "nodemailer";
import config from '../config/config.js';

const EMAIL = config.mail;
const MAIL_PASS = process.env.MAILPASS

const transporter = createTransport({
  service: 'gmail',  
  port: 587,
  auth: {
      user: EMAIL,
      pass: MAIL_PASS,
  }
});

const sendMail = async (data) => {  

  const emailContent = {
    from: 'Backend',
    to: EMAIL,
    subject: "Nuevo Registro",
    text: "Hello coders",    
    html: `<h1 style='color: black'>Nuevo Usuario Registrado</h1><p>Nombre: ${data.username}</p><p>Email: ${data.email}</p><p>Edad: ${data.edad}</p><p>Telefono: ${data.telefono}</p><p>Direccion: ${data.direccion}</p><p>Imagen: ${data.image}</p>`,  
  };

  try {
    const info = await transporter.sendMail(emailContent);     
  } catch (error) {
    console.log('erro de nodemailer', error);
  }

}


const newPurchase = async (data) => {  
  const id = data._id
  const email = data.email;
  const productos = data.products; 
  const direccion = data.direccion;  
  const productosArr = productos.map(el => {
    return {
      Producto: el.name,
      Precio: el.price,
      Cantidad: el.quantity
    }
  });

  const emailContent = {
    from: 'Backend',
    to: email,
    subject: "Pedido Realizado",
    text: "Hello coders",    
    html: `
    <h3 style='color: black'>Tu pedido ha sido realizado</h3>
    <p>El numero de pedido es: ${id}</p>    
    <p>La direccion de entrega es: ${direccion}</p> 
    <p>Tus productos son: </p> 
    <ul>
      ${productosArr.map(el => {
        return `<li>Producto: ${el.Producto} - Precio: $${el.Precio} - Cantidad: ${el.Cantidad}</li>`
      })}
    </ul>        
    `, 
  };  

  try {
    const info = await transporter.sendMail(emailContent);     
  } catch (error) {
    console.log('erro de nodemailer', error);
  }
}

const notification = async (data) => {
  const usuario = data.username;
  const id = data._id
  const email = data.email;
  const productos = data.products; 
  const direccion = data.direccion;
  const productosArr = productos.map(el => {
    return {
      Producto: el.name,
      Precio: el.price,
      Cantidad: el.quantity
    }
  });

  const emailContent = {
    from: 'Backend',
    to: EMAIL,
    subject: `Nuevo Pedido de: ${usuario}`,
    text: "Hello coders",
    html: `
    <h3 style='color: black'>Nuevo Pedido de: ${usuario}</h3>
    <p>Email: ${email}</p>
    <p>El numero de pedido es: ${id}</p>  
    <p>La direccion de entrega es: ${direccion}</p>  
    <p>Productos: </p>
    <ul>
      ${productosArr.map(el => {
        return `<li>Producto: ${el.Producto} - Precio: $${el.Precio} - Cantidad: ${el.Cantidad}</li>`
      })}
    </ul>
    `,
  };

  try {
    const info = await transporter.sendMail(emailContent);
  } catch (error) {
    console.log('erro de nodemailer', error);
  }
}

export {sendMail, newPurchase, notification};