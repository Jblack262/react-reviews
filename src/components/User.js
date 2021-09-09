import React from 'react';
import {BsStarFill, BsStarHalf} from 'react-icons/bs';

function User({user}) {
  const {rating, name, job, image, text} = user;

  const hasHalfStar = (Math.floor(rating) !== rating);

  return (
    <div className="user">
      <div className="pfp">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <p className="name">{name.toUpperCase()}</p>
        <p className="job">{job.toUpperCase()}</p>
        <div className="rating">
          {
            [...Array(Math.floor(rating))].map((x, index) => {
              return (
                <BsStarFill key={index}/>
              )
            })
          }
          {(hasHalfStar) ? <BsStarHalf/> : ""}
        </div>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default User
