import react from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';



const FooterMain = styled.div `
    background: rgb(163, 162, 253);
    padding: 20px 0;
    width: 100%;
    height: 111px;
    position: absolute;
    left: 0;
    bottom: 0;

    div {
        text-align: center;
    }

`
const IconBox = styled.div `
margin: 0 auto;
display: flex;
justify-content: space-around;
max-width: 300px;
width: 100%;

a {
    display: block;
    font-size: 30px;
    color:#000;
    margin-bottom: 10px;
    transition: all 0.4s;
}
a:hover{
    color:#fff;
  }
`

function Footer() {
    return (
      <FooterMain>
    
        <IconBox>
            <a href="#"><FontAwesomeIcon icon={ faInstagram }/></a>
            <a href="#"><FontAwesomeIcon icon={ faFacebook }/></a>
            <a href="#"><FontAwesomeIcon icon={ faFacebookMessenger }/></a>
        </IconBox>
        <div>© Learning React</div>
        
      </FooterMain>
    );
  }

  export default Footer;