import react from 'react';

import styled from 'styled-components';

//import style from './../css/Banner.module.css'



const MainBanner = styled.div`

background-size: cover;
background-position: 50% 50%;
padding: 200px 0;
`

const BannerText = styled.div`

background: rgba(0, 0, 0, 0.6);
font-size: 20px;
color: #fff;
max-width: 600px;
padding: 20px;
`

const Banner = () => {
    return (
      <MainBanner className='banner__main'>
        <div className='container'>
          <BannerText>
            Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor
          </BannerText>
        </div>
      </MainBanner>
    )
  }

  export default Banner;