import React, {useState} from 'react';
import Slider from "react-slick";
import Image from "./components/Image";
import Popup from "reactjs-popup";
import './styles/index.scss';




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Member.scss"







function Membre() {

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const [settings, setSettings] = useState(config);

  const products = [

    {
      img: "/images/Jean-Alexis.jpg",
      title: "Jean Alexis",
      text: "Président depuis 1995",
      description: "Après avoir parcouru le monde entier à bord de sa 4l de 1975, Jean Alexis a rencontré, il y a tout juste 20 ans, une nouvelle passion motorisée. Sa nouvelle tentation était de couleur rouge, jaune et noire. A ses yeux, il s'agissait d'une chimère à quatre roues et un moteur qui hurlait son nom. Son amour pour la marque au cheval cabré fut immédiat. Son autre péché était également la vitesse. C'est pourquoi, Jean Alexis s'est penché sur la compétition de Formule 1 pour suivre son écurie favorite. Il décida de créer cette association autour de ses passions avec d'autres passionnés !"


    },
    {
      img: '/images/Jean-Louis-Todt.jpg',
      title: 'Jean Louis Todt',
      text: 'Vice-Président depuis 1999',
      description: "Depuis tout petit, Jean-Louis adore les voitures. Jean-Louis a eu le coup de foudre lorsqu'à l'âge de cinq ans, il rencontrera fortuitement une Ferrari 270 de 1968 en plein visage."

    },
    {
      img: '/images/Odile-Deray.jpg',
      title: 'Odile Deray',
      text: 'Trésorière depuis 2016',
      description: "Odile adore l'argent. Mais elle aime par dessus tout les belles voitures italiennes qui roulent très vite. Ceci dit; l'un ne va pas sans l'autre."

    },
    {
      img: '/images/Jean-Michel-Schumacher.jpg',
      title: 'Jean-Michel Schumacher',
      text: 'Secrétaire depuis 2015.',
      description: "Jean-Michel est le fils caché de Mickaël Schumacher. C'est en tout cas ce qu'il aime croire. Jean-Michel est surtout un artiste de l'administratif. Il manie à merveille le formulaire E145879BY1548.Très sympathique. Néanmoins, il n'a pas le permis."

    },
    {
      img: '/images/Lara-Tatouille.jpg',
      title: 'Lara Tatouille',
      text: 'Membre stagiaire depuis 2020.',
      description: "Stagiaire.Elle prépare un doctorat en étudologie du coefficient de friction lors du contact entre une chaussure et une peau de banane. Elle adore le contact humain. Elle répond toujours présente pour animer la permanence de l'accueil de notre association. Elle est toujours partante pour préparer le café."
    },
    {
      img: '/images/Larry-Golade.jpg',
      title: "Larry Golade",
      text: "Membre d'honneur.",
      description: "Larry nous fait rire. Mais qu'est ce qu'il nous fait rire ! 10 fois mieux que les blagues Carambart et Patrick Sébastien réunis. Quel est le rapport avec Ferrari? Aucun. Mais il nous fait rire."

    },
    {
      img: '/images/Marie-Jeanne-Smoke.jpg',
      title: "Marie-Jeanne Smoke",
      text: 'Membre bienfaiteur.',
      description: "Marie-Jeanne a toujours des idées fumeuses. Cependant, elle est toujours enthousiaste pour rouler à 350 km/h sur l'autoroute en sens inverse. On l'adore !"

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

  return ( <div className = "App">

    <Image />

    <Slider {
      ...settings
    } > {products.map((x, i) => {
          return <div key = {i}
          className = "img-card">
            <img className = "img"src = {x.img} alt = ''/>
            <div class = "card-body" >
            <div className = "card-title" > {x.title} 
            </div> 
            <div className = "card-text" > {x.text} 
            </div>

            <Popup trigger = {
              <button className = 'card-button' > En savoir plus </button>} position="right center">
                <div className popup-content>
                  <img className = "img1"src = {x.img}alt = ''/>
              <div className = "wrap" >                
                <div className = "h1descr"> {x.title}</div> 
                <div className = 'titredescr'> {x.text}</div>  
                <div className = 'articledescript'> {x.description}</div> 
              </div> 
              </div>            
              </Popup >

              </div>

              </div>


           })
      } </Slider>    

      </div>

    );
  }

  export default Membre;
  