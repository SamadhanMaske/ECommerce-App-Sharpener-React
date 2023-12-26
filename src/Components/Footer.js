import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import google from '../assets/images/pay/play.jpg';
import apple from '../assets/images/pay/app.jpg';
import payment from '../assets/images/pay/pay.png';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4 d-flex flex-column'>
              <h3 className='mb-3'>
                Contact Us
              </h3>
              <div className='footer-details'>
                <p className='mb-3'><b>Address : </b> Daulat Villa, Dr Babasaheb Ambedkar Road, Matunga, Mumbai-400019</p>
                <p className='mb-3'><b>Phone : </b> <a href='8788491800'>Call us +91 8788491800</a></p>
                <p className='mb-3'><b>Hours Open : </b> From 8 AM to 8PM</p>
                <p className='mb-2'> <b>Follow Us </b></p>
                <div className='col-3 social-icons mb-2 d-flex justify-content-around'>
                  <Link><AiFillTwitterCircle className='fs-5' /> </Link>
                  <Link><FaFacebook className='fs-5' /></Link>
                  <Link><FaInstagramSquare className='fs-5' /></Link>
                  <Link><FaLinkedin className='fs-5' /></Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h3 className='mb-3'>About</h3>
              <div className='footer-details d-flex flex-column '>
                <Link className='mb-3'>About Us</Link>
                <Link className='mb-3'>Delivery</Link>
                <Link className='mb-3'>Policies</Link>
                <Link className='mb-3'>Terms & Conditions</Link>

              </div>
            </div>
            <div className='col-2'>
              <h3 className='mb-3'>Account</h3>
              <div className='footer-details d-flex flex-column '>
                <Link className='mb-3'>Profile</Link>
                <Link className='mb-3'>View Cart</Link>
                <Link className='mb-3'>WishList</Link>
                <Link className='mb-3'>Payments</Link>
                <Link className='mb-3'>Coupons</Link>
              </div>
            </div>
            <div className='col-4'>
              <h3 className='mb-3'>Install App</h3>
              <div className='footer-details'>
                <p>Available on Google Play Services & App Store</p>
                <div className='pay'>
                  <Link><img src={google} alt='Play-Store' className='img-fluid p-2 my-3' /></Link>
                  <Link><img src={apple} alt='App-Store' className='img-fluid p-2 my-3' /></Link>
                </div>
                <p>Payment Methods</p>
                <Link className='pay'><img src={payment} alt='Play-Store' className='img-fluid p-2 my-3' /></Link>
              </div>
            </div>
          </div>

          <hr />
          <div className='row d-flex justify-content-between'>
            <div className='col-3'>
              <p>&copy: Designed and developed by Samadhan</p>
            </div>
            <div className='col-3 d-flex justify-content-around'>
              <Link className='text-black'>Privacy Policy</Link>
              <Link className='text-black'>Terms of Use</Link>
              <Link className='text-black'>Contact Me</Link>
            </div>
          </div>

        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
