import React from "react";
import "./Home.css";

import DressCard from "./../../components/DressCard/DressCard";
import { THEME, PRODUCTS, MAIN_TITLE, TAGLINE } from './../../config/data';

function Home() {
  return (
    <div 
    style={{backgroundImage: 'url("https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
          backgroundRepeat:"no-repeat", 
          backgroundSize: "cover"}}>
      
      <h1 className="main-title" style={{color: THEME.highlight, margin: 0}}>
        { MAIN_TITLE }
        </h1>
      <p className="tagLine">{ TAGLINE }</p>

      <div className="dress-card-container">

      {PRODUCTS.map((dressItem)=>{

        return <DressCard
          imgUrl={dressItem.imgUrl}
          title={dressItem.title}
          description={dressItem.description}
          isHighRating={dressItem.isHighRating}
          price={dressItem.price}
          />
      })}

      </div>
    </div>
  );
}

export default Home;
