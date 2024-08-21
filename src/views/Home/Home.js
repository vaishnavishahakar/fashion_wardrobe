import React from 'react';
import "./Home.css"

import DressCard from './../../components/DressCard/DressCard';

function Home() {
  return (
    <div>
      <h1>FASHION - WARDROBE</h1>

      <DressCard
        title="A-Line Dresses"
        description="The 'A-line dress', which cinches at the hips 
        and then flares out, is a classic, feminine style that looks 
        great on those with pear-shaped figures, as it draws attention to the shoulders."
        isHighRating={true}
      />

<DressCard
        title="Maxi Dresses"
        description="There are few types of dresses as effortlessly stylish as
        a flowing maxi dress, which hits at the ankle and may even extend to the floor"
        isHighRating={false}
      />
    </div>
  );
}

export default Home;
