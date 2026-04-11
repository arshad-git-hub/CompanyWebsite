import React from 'react'
import Header from './header'
import Footer from './copyright'

function Error() {
  return (
    <>
    <Header/>
      <section className='error'>
          <h1>Page not found!</h1>
      </section>
      <Footer/>
    </>
  )
}

export default Error
