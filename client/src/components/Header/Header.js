import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {

  const [userData, setUserData] = useState(null)
  const [cartData, setCartData] = useState(null)
  
  const { user, cart } = useContext(UserContext)

  useEffect(() => {
    setUserData(user)
    setCartData(cart)
    // eslint-disable-next-line
  }, [cart]);

  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>DMB</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
                <li className="nav-item dropdown">
                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>
            </ul>
        </div>
        {userData
        ?
          <div className="header">
            <p>Bienvenido {userData.username}</p>
            {cartData && 
              <div>              
                <CartIcon cart={cartData}/>
                  {userData.username && 
                    <Link to ="/profile"><img src={`http://localhost:8080/profileImages/${userData.image}`} alt="thumbnail" className="card-img-top"/></Link>
                  }
              </div>        
            }        
          </div>
        :
        <button className="btn btn-outline-light" type="submit">
          Iniciar Sesión
          <Link to={'/login'}></Link>
        </button>
      }
      </div>
    </nav>
  )
}

export default Header;