import React from "react";
import "./Home.css";

import DressCard from "./../../components/DressCard/DressCard";

function Home() {
  return (
    <div>
      <h1>FASHION - WARDROBE</h1>

      <div className="dress-card-container">
        <DressCard
          imgUrl="https://n.nordstrommedia.com/it/790daaa0-167d-4b04-92ca-020a3e295d0f.jpeg?h=750&w=651"
          title="A-Line Dresses"
          description="The 'A-line dress', which cinches at the hips and then flares out, is a classic, feminine style that looks 
        great on those with pear-shaped figures, as it draws attention to the shoulders. Its versatility also 
        makes it a go-to, since it easily transitions from casual to dressy with the addition of elegant accessories."
          isHighRating={true}
          price={1500}
        />

        <DressCard
          imgUrl="https://n.nordstrommedia.com/it/4731909a-63de-496d-9334-562f1fafa8fa.jpeg?h=750&w=651"
          title="Maxi Dresses"
          description="There are few types of dresses as effortlessly stylish as
        a flowing maxi dress, which hits at the ankle and may even extend to the floor. This relaxed style is 
        comfortable enough for unwinding at the beach or lounging around the house, but it's also easy to dress 
        up with the right accessories."
          isHighRating={false}
          price={2000}
        />

        <DressCard
          imgUrl="https://n.nordstrommedia.com/it/c43aac12-90a3-4f48-8124-ef6514754b45.jpeg?h=750&w=651"
          title="Cocktail Dresses"
          description="The magic of a cocktail dress is its ability to look formal yet understated. The 
          knee-length style is perfect for cocktail parties, events that are 
          elegant but not formal enough for a ballgown. Because cocktail dresses are available with different 
          necklines and silhouettes."
          isHighRating={true}
          price={2500}
        />

        <DressCard
          imgUrl="https://n.nordstrommedia.com/it/670fe0e5-df54-4865-9643-a4d42027d587.jpeg?h=750&w=651"
          title="Ballgowns"
          description="When dressing for a black-tie event, you can't go wrong with an elegant ballgown—a 
          formal dress that touches the floor. You can find a ballgown for any body type, as there's a multitude 
          of styles available, ranging from full-skirted princess dresses to fitted mermaid silhouettes."
          isHighRating={false}
          price={3000}
        />
      </div>
    </div>
  );
}

export default Home;
