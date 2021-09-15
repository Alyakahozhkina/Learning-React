import react from 'react';

import styled from 'styled-components';



const Review = (props) => {
    return (
      <div>
          <div className='ReviewPost'>
              <p className='ReviewPostName'>{props.name}</p>
              <p className='ReviewPostText'>{props.text}</p>
          </div>
      </div>
    )
  }

  export default Review;