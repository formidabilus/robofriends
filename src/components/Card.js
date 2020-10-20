import React from "react";

//destructuring props from const {name, email, id} = props;
const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib brf3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${name}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
