import React from 'react'
import './Home.css'
import Product from '../Product/Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__img'
          src='https://m.media-amazon.com/images/I/71IaWGC1SUL._SX3000_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='1'
            title='HP DeskJet 2755e Wireless Color inkjet-printer, Print, scan, copy, Easy setup, Mobile printing, Best-for home, Instant Ink with HP+,white'
            price={59.89}
            image='https://m.media-amazon.com/images/I/61S+R5SLmrL._AC_SX679_.jpg'
            rating={4}
          />
          <Product
            id='2'
            title='Phomemo D30 Label Maker Machine with Tape, Portable Bluetooth Label Printer, Small Smart Phone Handheld Sticker Mini Labeler Multiple Templates Font Icon Easy to Use Inkless Rechargeable F Office Home'
            price={29.99}
            image='https://m.media-amazon.com/images/I/61GTWnWgCHL._AC_SX679_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='3'
            title='MATEIN Travel Laptop Backpack, Business Anti Theft Slim Durable Laptop Backpack with USB Charging Port, Water Resistant College Bag Computer Bag Gifts for Men & Women Fits 15.6 Inch Notebook, Grey'
            price={29.99}
            image='https://m.media-amazon.com/images/I/81L8quiJXhL._AC_SX679_.jpg'
            rating={4}
          />
          <Product
            id='4'
            title='Anker USB C Charger, 735 Charger (Nano II 65W), iPad Charger, PPS 3-Port Fast Compact Foldable for MacBook Pro/Air, iPad Pro, Galaxy S23'
            price={39.99}
            image='https://m.media-amazon.com/images/I/518CnkU772L._AC_SX679_.jpg'
            rating={4}
          />
          <Product
            id='5'
            title='USB 3.0 Hub, VIENON 4-Port USB Hub USB Splitter USB Expander for Laptop, Xbox, Flash Drive, HDD, Console, Printer, Camera,Keyborad, Mouse'
            price={7.99}
            image='https://m.media-amazon.com/images/I/51MiG9+u4lL._AC_SX679_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='6'
            title='SAMSUNG 34-Inch ViewFinity S50GC Series Ultra-WQHD Monitor, 100Hz, 5ms, HDR10, AMD FreeSync, Eye Care, Borderless Design, PIP, PBP, LS34C502GANXZA, 2023,Black'
            price={299.99}
            image='https://m.media-amazon.com/images/I/71y4oBIWcdL._AC_SX679_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home