import React, { Fragment } from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../assets/images/apneck.png'
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";


function Header() {
  return (
    <Fragment>
      <header className='header-top-strip p-1 shadow-sm'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p>Trending outfits at 100% off</p>
            </div>
            <div className='col-6 d-flex justify-content-between'>
              <div>
                <a href='8788491800'>Call us +91 8788491800</a>
              </div>
              <div>
                <Link><LuPhoneCall className='fs-3 mx-4' /></Link>
                <Link><IoMdMail className='fs-3 mx-4' /></Link>
              </div>

            </div>
          </div>
        </div>
      </header>
      <header className='header-upper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2 text-center m-auto'>
              <Link to={'/'}><img src={logo} alt='logo' className='img-fluid logo' /> </Link>
            </div>
            <div className='col-3 d-flex align-items-center mt-3'>
              <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">All</span>
                <input type="text" class="form-control" placeholder="Search products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button class="input-group-text" id="basic-addon2">Search</button>
              </div>
            </div>
            <div className='col-4 nav-links d-flex align-items-center justify-content-between'>
              <Link to={'/'}>Home</Link>
              <Link to={'shop'}>Shop</Link>
              <Link to={'blogs'}>Blogs</Link>
              <Link to={'about'}>About</Link>
              <Link to={'contacts'}>Contacts</Link>
            </div>
            <div className='col-3 d-flex align-items-center justify-content-around'>
              <Link to={'wishlist'} className='d-flex'><HiOutlineInboxArrowDown className='fs-3 mx-2' /><p>Wishlist</p></Link>
              <Link to={'login'} className='d-flex'><MdOutlineAccountCircle className='fs-3 mx-2' /> <p>Account</p></Link>
              <Link to={'cart'} className='d-flex'><CgShoppingCart className='fs-3 mx-2' /><p>Cart</p></Link>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header