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
      />
    </div>
  );
}

export default Home;
