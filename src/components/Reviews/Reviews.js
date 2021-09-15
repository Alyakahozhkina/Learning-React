import react from 'react';

import styled from 'styled-components';

import Review from './Review/Review';


const Reviews = () => {
    return (
      <div>
          <div className='Reviews'>
              <div className='container'>
                  <Review name='Dima' text='Lorem Ipsum dolor Dima'/>
                  <Review name='Alla' text='Lorem Ipsum dolor Alla'/>
                  <Review name='Victor' text='Lorem Ipsum dolor Victor'/>
              </div>
          </div>
      </div>
    )
  }

  export default Reviews;