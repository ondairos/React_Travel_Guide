import React from "react";

export const MainCard = () => {
  return (
    <div className="main__card">
      <img className="main__card-image" src="" alt="placeholder image" />

      <div className="main__span">
        <span className="main__card-country">country</span>{" "}
        <span className="main__card-gmaps">View On Google Maps</span>
      </div>

      <h1 className="main__card-title">Title</h1>
      <h3 className="main__card-duration">12 Jan,2021 - 25 Jan, 2021</h3>
      <p className="main__card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione
        repudiandae accusamus rem! Aspernatur harum natus accusamus tenetur
        ducimus eum et nesciunt, dolores, culpa fugit, mollitia molestiae error
        libero optio?
      </p>
      <hr />
    </div>
  );
};

export default MainCard;
