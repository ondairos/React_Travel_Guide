import React from "react";

export const MainCard = () => {
  return (
    <>
      <div className="main__card">
        <div class="column__image">
          <img
            className="main__card-image"
            src="public/photo1.jpg"
            alt="placeholder image"
          />
        </div>

        <div class="column">
          <h3 className="main__card-country">Country</h3>
          <a className="main__card-gmaps">View On Google Maps</a>

          <h1 className="main__card-title">Title</h1>
          <h3 className="main__card-duration">12 Jan,2021 - 25 Jan, 2021</h3>
          <p className="main__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ratione repudiandae accusamus rem! Aspernatur harum natus
            accusamus.Dolorum ratione repudiandae accusamus rem! Aspernatur
            harum natus accusamus.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MainCard;
