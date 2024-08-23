import React from "react";
import "./Home.css";

import DressCard from "./../../components/DressCard/DressCard";
import { THEME, PRODUCTS, MAIN_TITLE, TAGLINE } from './../../config/data';

function Home() {
  return (
    <div>
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
