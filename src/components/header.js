import react from 'react';

import styled from 'styled-components';
import logo from './../logo.svg';

//import style from './../css/Header.module.css'

const HeaderMain = styled.div `
background: rgb(163, 162, 253);
    padding: 10px 0;
}
`

const NavMenu = styled.div `
ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
ul li a{
    display: block;
    color: #000;
    font-size: 22px;
    text-decoration: none;
    padding: 10px 30px;
    transition: all 0.4s;
  }
  ul li a:hover{
    color:#fff;
  }
`

const HeaderInner = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.div `
  width: 100px;
`

function Header() {
    return (
        
      <HeaderMain>
        <div className='container'>
          <HeaderInner>
            <Logo>
              <a href='/'><img src={logo} alt='logo'/></a>
            </Logo>
                  <NavMenu>
                    <ul>
                      <li><a href='/home'>Home</a></li>
                      <li><a href='/about'>About</a></li>
                      <li><a href='#'>News</a></li>
                      <li><a href='#'>Contacts</a></li>
                    </ul>
                  </NavMenu>
          </HeaderInner>
        </div>
      </HeaderMain>
      
    );
  }

  export default Header;