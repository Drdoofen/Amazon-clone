import React from 'react'
import "./Home.css"
import Product from "./Product.js"
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" 
            />

            <div className='home__row'>
              <Product 
              id="12321"
              title='The lean startup' 
              price={30.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
              />
              <Product
                id='43212'
                title='Kenwood kMiz Stand Mixer for 
                baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                price={400}
                rating={3}
                image="https://m.media-amazon.com/images/I/41-v1XOop4L._SY300_SX300_QL70_FMwebp_.jpg"
              />
            </div>
            <div className='home__row'>
              <Product
                id='123142344'
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={125.90}
                rating={5}
                images="https://m.media-amazon.com/images/I/71it2biogSS._AC_UY327_FMwebp_QL65_.jpg"
              />
              <Product
                id='43563566'
                title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={39.75}
                rating={2}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
              <Product
                id='242356546'
                title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                price={609.99}
                rating={3}
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1670865951347"
              />
            </div>
            <div className='home__row'>
              <Product
                id="9912939921"
                title="Samsung LC49RG90SSUXEN 49' Curved
                LED Gaming Monitor - Super Ultra Wide 
                Dual WQHD 5120 x 1440"
                price={1922.40}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
            </div>

        </div>
        
    </div>
  )
}

export default Home