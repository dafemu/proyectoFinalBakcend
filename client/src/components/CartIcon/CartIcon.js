import { Link } from "react-router-dom"

const CartIcon = ({cart}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/cart">
          <p className="badge text-bg-secondary">{cart.products.length}</p>
          <img src="/images/cart.svg" alt="icon" className="card-img-top"/>
        </Link>
      </div>
    </>
  )
}

export default CartIcon;