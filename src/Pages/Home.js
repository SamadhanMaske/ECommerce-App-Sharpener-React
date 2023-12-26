import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Hero'
import FeaturedProducts from '../Components/FeaturedProducts'

export const ProductsContext = React.createContext();

function Home() {

  return (
    <Fragment>
      <section className='banner'>
        <div className=''>
          <div className='row'>
            <div className='banner-details p-5 d-flex flex-column align-items-start justify-content-center'>
              <span className='shadow-lg p-3 text-white'>Trade in offer!!!</span>
              <h1>Super Value Deals</h1>
              <p className='p-2 m-0 mb-1'>Save more with Samadhan Dresses</p>
              <Link className='button-link mb-3 m-1'>Shop Now</Link>

            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className='featured-products p-4'>
        <div className=''>
          <div className='row'>
            <div className='text-center'>
              <h1>Our Featured Products</h1>
              <p>All weather modern designs</p>
            </div>
            <div className='d-flex justify-content-around'>
              <div className='col-4'>
                <FeaturedProducts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home