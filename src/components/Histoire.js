import React from 'react';
import { Slide } from 'react-slideshow-image';

const Réglages = {
    duration:5000,
    infinite: true,
    indicators: true,
    arrows: true,
    transitionDuration:500,
}

const Slideshow = () => {
  return(
    <div>
    <Slide {...Réglages}>

  <aside className="menu-container-histoire1">
            <div className="container-banniere-histoire1"> 
            </div>
            <div className="container-content-histoire1">
              <h1 className="HistoireF1"> LA FORMULE 1 </h1>
              <p> La Formule 1, communément abrégée en F1, est une discipline de sport automobile considérée comme la catégorie reine de ce sport. <br/> 
              Elle a pris au fil des ans une dimension mondiale et elle est, avec les Jeux olympiques et la Coupe du monde de football, l'un des événements sportifs les plus médiatisés. <br/>
              Définie en 1946, la réglementation formule 1 est effective dès la saison 1948, les Grands Prix se déroulant alors hors-championnat.
              <br/>
              C'est en 1950 que le premier championnat officiel de F1 est inauguré : le championnat du monde des pilotes. <br/>
              </p>
            <figure className="Fhein"> 
            </figure>
            </div>
  </aside>


  
  <aside className="menu-container-histoire2">
            <div className="container-banniere-histoire2"> 
            </div>
            <div className="container-content-histoire2">
              <h2 className="HistoireFerrari"> L'ECURIE FERRARI </h2>
              <p> L'écurie Ferrari, de son nom complet Scuderia Ferrari, a vu le jour en 1929 pour ensuite rejoindre la marque Ferrari à part entière en 1947. <br/>
              Pionnière et pillier de la Formule 1, l'écurie Ferrari possède majorité des records de la discipline. <br/> 
              Ferrari gagnera son premier titre mondial 1 an après l'officialisation  de celui-ci, en 1951. <br/> 
              Le dernier palmares mondial de l'écurie a été remporté en 2007.<br/>
              C'est en 1950 que le premier championnat officiel de F1 est inauguré : le championnat du monde des pilotes. <br/>
              </p>
              <figure className="Ferra">

              </figure>
            </div>
  </aside>
  
  
  <aside className="menu-container-histoire3">
            <div className="container-banniere-histoire3"> 
            </div>
            <div className="container-content-histoire3">
              <h3 className="HistoireFanClub"> NOTRE FANCLUB </h3>
              <p> Créé en 2021, notre club a pour vocation de promouvoir et de supporter l'écurie Ferrari. <br/> 
              Nos membres fondateurs Hariz, Hamidou, Fanny, David-Alexandre et Alexis ont toujours été de grands passionnés depuis leur tendre enfance. <br/> 
              C'est tout logiquement qu'ils suivent l'écurie à l'étalon à chaque Grand Prix.<br/> 
              Pour nous, Ferrari est plus qu'une écurie, c'est un état d'esprit: celui de fédérer, de ne jamais abandonner et de toujours pousser plus loin, pour battre les records et les attentes. <br/>
              C'est pourquoi, malgré nos 64 échecs cumulés à l'examen du permis de conduire, nous continuons de donner tout ce que nous avons pour l'écurie Ferrari. <br/>
              </p>
              <figure className="Fon">
                
              </figure>
            </div>
  </aside>
    </Slide>

</div>)
}

export default Slideshow