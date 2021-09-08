import React, { useState } from "react";
import Slider from "react-slick";
import Popup from "reactjs-popup";

import SliderData from "./SliderData";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/css/main.css";
import "reactjs-popup/dist/index.css";

function MainSlider() {
  const config = {
    className: "center",
    // centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [settings] = useState(config);

  <SliderData />;

  const products = SliderData();

  return (
    <div className="App">
      <Slider {...settings}>
        {products.map((x, i) => {
          return (
            <div key={i} className="img-card">
              <img className="img" src={x.img} alt="" />
              <div className="card-body">
                <div className="card-title">{x.title}</div>
                <div className="card-text">{x.text}</div>
              </div>
              {/* <button className="btn">Read More</button> */}
              <Popup
                trigger={<button className="btn">Read More</button>}
                // position="center"
              >
                <div className="popup-body">
                  <img className="img-detail" src={x.img} alt="" />
                  {/* <div className="card-title">{x.title}</div> */}
                  <div className="wrap">
                    <div className="title-detail">{x.text}</div>
                    <div className="text-detail">{x.long}</div>
                    <div className="text-detail">{x.date}</div>
                  </div>
                </div>
              </Popup>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MainSlider;
