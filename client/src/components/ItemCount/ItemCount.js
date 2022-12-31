import { useState } from 'react';

const ItemCount = ({stock, onAdd}) => {

  const [count, setCount] = useState(1)

  const addCart = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const subTractCart = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <button className='btn m-2' onClick={subTractCart}>-</button>
        <p className='form-label' >{count}</p>
        <button className='btn m-1' onClick={addCart}>+</button>
        <button className='btn btn-outline-primary' onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default ItemCount