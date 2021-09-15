import react from 'react';

import styled from 'styled-components';

import Banner from './banner.js';
import Reviews from './Reviews/Reviews';

//import style from './../css/Header.module.css'




function HomePage() {
    return (
      <div className='HomePage'>
        <Banner />
        <Reviews />
      </div>
      
    );
  }

  export default HomePage;