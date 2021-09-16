import react from 'react';

import styled from 'styled-components';

import reactImg from './../img/React.jpg'


const AboutMain = styled.div `
    background: rgb(255, 251, 235);
    padding: 30px 0;
}
`
const AboutTitle = styled.h2 `
    text-align: center;
    padding-bottom: 20px;
}
`
const AboutInner = styled.div `
    display: flex;
    justify-content: space-between;
    align-items:center;

    div {
        margin-right: 30px;
    }

    p {
        text-align: justify;
    }
}
`


function About() {
    return (
      <AboutMain>
        <div className='container'>
            <AboutTitle>
                About
            </AboutTitle>
            <AboutInner>
                <div className='AboutImg'>
                    <img src={reactImg} alt='react'/>
                </div>
                <p className='AboutText'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim culpa, eos fugit a saepe voluptatum rerum asperiores aliquam dolore, cum explicabo velit alias exercitationem porro voluptas! Distinctio dolorem fuga quae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim culpa, eos fugit a saepe voluptatum rerum asperiores aliquam dolore, cum explicabo velit alias exercitationem porro voluptas! Distinctio dolorem fuga quae! 
                </p>
            </AboutInner>
        </div>
      </AboutMain>
      
    );
  }

  export default About;