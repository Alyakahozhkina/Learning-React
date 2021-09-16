import react from 'react';

import styled from 'styled-components';


const ReviewPost = styled.div `
margin: 0 auto;
display: flex;
justify-content: space-around;
max-width: 400px;
width: 100%;
`


const Review = (props) => {
    return (
      <div>
          <ReviewPost>
              <p className='ReviewPostName'>{props.name}</p>
              <p className='ReviewPostText'>{props.text}</p>
          </ReviewPost>
      </div>
    )
  }

  export default Review;