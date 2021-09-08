import React from 'react';
import {AiFillStar} from 'react-icons/ai';

function User({user}) {
  const {rating, name, job, image, text} = user;
  
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
            [...Array(Math.round(rating))].map((x, index) => {
              return (
                if (index == )
                <AiFillStar key={index}/>
              )
            })
          }
        </div>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default User
