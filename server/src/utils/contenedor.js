import * as fs from 'fs';

const getAll = async (ruta) => {
  try {      
    const data = fs.readFileSync(ruta, 'utf-8')
    const dataObj = JSON.parse(data) 
    return (dataObj)
  }
  catch (err) {      
    throw new Error('No se pudo leer archivo', err)
  }
}

const create = async (product, ruta) => {
  try {  
    let timestamp = new Date().getTime();            
    const arr = await getAll(ruta);
    let id = arr.length > 0 ? arr.length + 1 : 1;
    product._id = id;
    product.timestamp = timestamp;

    arr.push(product);
    fs.writeFileSync(ruta, JSON.stringify(arr, null, 2));
    return(product);
  }
  catch (err) {      
    throw new Error('Error de escritura', err);
  }
}


const getById = async (x, ruta) => {   
  try {             
    const arr = await getAll(ruta);
    if (arr.length === 0) {return "Archivo Vacio"}
    return (arr.find(el => el._id == x) || { error: 'No existe el producto' });
  }
  catch (err) {      
    throw new Error('Error de Lectura', err);
  }
};

const deleteById = async (i, ruta) => {  
  try {
    const arr = await getAll(ruta);  
    let index = arr.findIndex(x => x._id == i) 
    if (index == -1) {
      return ({ error: 'No existe el producto' });
    }  

    const newArr = arr.filter(el => el._id != i);
    fs.writeFileSync(ruta, JSON.stringify(newArr, null, 2));
    return "Producto Eliminado";
  } 
  catch (err) {    
    throw new Error('Error de escritura', err);
  }  
};

 const changeById = async (i, object, ruta) => {
  try {
    const arr = await getAll(ruta);
    let index = arr.findIndex(x => x._id == i);

    if (index == -1) {
      return ({ error: 'No existe el productooo' });
    } 

    object._id = i;
    object.timestamp = arr[index].timestamp;
    const editedProduct = {...arr[index], ...object}; 
    arr[index] = editedProduct;

    fs.writeFileSync(ruta, JSON.stringify(arr, null, 2));

    return "Producto Reemplazado";
  }
  catch (err) {    
    throw new Error('Error de escritura', err);
  }
}

export {getAll, create, getById, deleteById, changeById};