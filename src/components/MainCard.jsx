import React from "react";

export const MainCard = (props) => {
  return (
    <>
      <div className="main__card">
        <div class="column__image">
          <img
            className="main__card-image"
            src={props.imageUrl}
            alt="placeholder image"
          />
        </div>

        <div class="column">
          <h3 className="main__card-country">{props.title}</h3>
          <a href={props.googleMapsLink} className="main__card-gmaps">View On Google Maps</a>

          <h1 className="main__card-title">{props.location}</h1>
          <h3 className="main__card-duration">{props.startDate} - {props.endDate}</h3>
          <p className="main__card-description">
            {props.description}
          </p>
        </div>
      </div>
      <hr className="main__hor-line" />
    </>
  );
};

export default MainCard;
