import React from 'react'
import Navbar from '../comp/Navbar'
import Banner from '../comp/Banner'
import Footer from '../comp/footer'
import Freecourse from '../comp/Freecourse'

function Home(){
    return(
        <>
        <div className='dark:bg-slate-900 dark:text-white'>
         <Navbar/>
          <Banner/>
          <Freecourse/>
          <Footer/>
          </div>
        </>
    )
}
export default Home;