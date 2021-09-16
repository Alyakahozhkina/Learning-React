import react from 'react';

import styled from 'styled-components';

import Review from './Review/Review';

const ReviewsMain = styled.div `
    background: rgb(255, 251, 245);
    padding: 20px 0;
`

const ReviewTitle = styled.h2 `
text-align: center;
margin-bottom: 20px;
`

const Reviews = () => {
    return (
      <div>
          <ReviewsMain>
              <div className='container'>
                  <ReviewTitle>Review</ReviewTitle>
                  <Review name='Dima' text='Lorem Ipsum dolor Dima'/>
                  <Review name='Alla' text='Lorem Ipsum dolor Alla'/>
                  <Review name='Victor' text='Lorem Ipsum dolor Victor'/>
              </div>
          </ReviewsMain>
      </div>
    )
  }

  export default Reviews;