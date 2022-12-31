import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ChatBtn from './components/ChatBtn/ChatBtn';
import Header from './components/Header/Header';
import { UserProvider } from './context/userContext';
import Admin from './pages/Admin/Admin';
import CartContainer from './pages/Cart/CartContainer';
import Category from './pages/Category/Category';
import Chat from './pages/Chat/Chat';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import Product from './pages/Product/Product';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/category/:category" element={<Category/>} />
          <Route path="/products/edit/:id" element={<Edit/>} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/chat" element={<Chat />} />
        </Routes> 
        <div className="m-auto w-75 mt-2">
          <ChatBtn/>        
        </div>
      </BrowserRouter>   
    </UserProvider>
  );
}

export default App;
