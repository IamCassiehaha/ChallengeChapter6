import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PopularMovie from '../components/PopularMovie';
import Footer from '../components/Footer';

const Home = () => {
  return ( 
    <div>
      <Navbar />
      <Header />
      <PopularMovie />
      <Footer />
    </div>  
  )
}

export default Home