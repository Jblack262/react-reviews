import React from 'react';
import reviews from '../util/data';
import User from './User';

import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';

function Reviews() {
  const [userID, setUserID] = React.useState(0);

  const onDecrease = () => {
    let newUserID = userID - 1;
    if (newUserID >= 0 && newUserID < reviews.length) {
      setUserID(newUserID)
    }
  }
  const onIncrease = () => {
    let newUserID = userID + 1;
    if (newUserID >= 0 && newUserID < reviews.length) {
      setUserID(newUserID)
    }
  }
  return (

    <div className="reviews">
      <User user={reviews[userID]} />
      <div className="buttons">
        <BiLeftArrow onClick={onDecrease}/>
        <BiRightArrow onClick={onIncrease}/>
      </div>
    </div>
  )
}

export default Reviews
