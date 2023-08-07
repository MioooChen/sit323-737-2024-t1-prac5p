import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Header from '../Header';
import Cards from '../Cards';

import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;