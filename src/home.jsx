import React from 'react'
import Header from './header'
import Learn from './learn';
import Faltu from './faltu';
import Hero from './hero';
import Services from './services';
import Features from './features';
import Technologies from './tech';
import Products from './products';
import Testimonials from './testimonials';
import Founders from './founders';
import Binaries from './binaries';
import Culture from './culture';
import Values from './values';
import Copyright from './copyright';
import Footer from './footer';
import Hero2 from './hero2';

let some1 = {
  name : 'Arshad',
  location : 'New Delhi',
  age : 26,
}

function Home() {
  return (
    <>
        <Header />
        {/* <Faltu/> */}
        {/* <Learn Some = {some1} name2="Shahid"/> */}
        {/* <Hero2 /> */}
        <Hero />
        <Features />
        <Services />
        <Technologies />
        <Products />
        <Testimonials />
        <Founders />
        <Binaries />
        <Culture />
        <Values />
        <Copyright/>
        {/* <Footer/> */}
    </>
  )
}

export default Home