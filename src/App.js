import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import WishList from './Pages/WishList'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='blog' element={<Blogs/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contacts' element={<Contacts />}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='wishlist' element={<WishList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
