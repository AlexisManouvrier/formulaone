import React, { useState } from 'react';

import Slider from "react-slick";
import Image from "./components/Image";
import './index.css';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [settings, setSettings] = useState(config);

  const products = [

    {
      img: '/images/Jean-Alexis.jpg',
      title: 'Jean Alexis',
      text: 'Président depuis 1995'
    },
    {
      img: '/images/Jean-Louis-Todt.jpg',
      title: 'Jean Louis Todt',
      text: 'Vice-Président depuis 1995'
    },
    {
      img: '/images/Odile-Deray.jpg',
      title: 'Odile Deray',
      text: 'Trésorière depuis 1995'
    },
    {
      img: '/images/Jean-Michel-Schumacher.jpg',
      title: 'Jean-Michel Schumacher',
      text: 'Secrétaire depuis 2015.'
    },
    {
        img: '/images/Lara-Tatouille.jpg',
        title: 'Lara Tatouille',
        text: 'Membre stagiaire depuis 2020.'
      },
      {
        img: '/images/Larry-Golade.jpg',
        title: "Larry Golade",
        text: "Membre d'honneur depuis toujours."
      },
      {
        img: '/images/Marie-Jeanne-Smoke.jpg',
        title: "Marie-Jeanne Smoke",
        text: 'Membre bienfaiteur depuis 1995.'
      }
  ]

  const onChangeCenterMode = e => {
    if (e.target.checked) {
      setSettings({
        ...config,
        centerMode: true,
        centerPadding: '50px'
      });
    } else {
      setSettings(config);
    }
  }

  return (
    <div className="App">
      {/* <label className="cb-centermode">
        <input type="checkbox" checked={settings.centerMode} onChange={onChangeCenterMode} />
        <span>Enable Center Mode</span>
      </label> */}
      <Image />

      <Slider {...settings}>
        {products.map((x, i) => {
          return <div key={i} className="img-card">
            <img className="img" src={x.img} />
            <div class="card-body">
              <div className="card-title">{x.title}</div>
              <div className="card-text">{x.text}</div>
              <button className="card-button">En savoir plus</button>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default App;