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
    } else {
      setUserID(reviews.length -1)
    }
  }
  const onIncrease = () => {
    let newUserID = userID + 1;
    if (newUserID >= 0 && newUserID < reviews.length) {
      setUserID(newUserID)
    } else {
      setUserID(0)
    }
  }
  const randomUser = () => {
    let newUserID = Math.floor(Math.random() * reviews.length)
    setUserID(newUserID);
  }
  return (

    <div className="reviews">
      <User user={reviews[userID]} />
      <div className="buttons">
        <div>
          <BiLeftArrow tabIndex="0" onClick={onDecrease}/>
          <BiRightArrow tabIndex="0" onClick={onIncrease}/>
        </div>
        <div>
          <button className="surpriseBtn" onClick={randomUser}>Surprise Me</button>
        </div>
      </div>
    </div>
  )
}

export default Reviews
