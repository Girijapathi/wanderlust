import React from 'react';

import './App.css';
import AppHeader from "./components/AppHeader";
import ImageSlider from "./components/ImageSlider";
import AppBodyContent from "./components/AppBodyContent";
function App() {
  
  return (
    <div className="App">
      <AppHeader/>
      <div className="App-container">
        <ImageSlider/>
        
        <AppBodyContent/>
      </div>
      <div className="App-footer">
        Copyright © 2019 wanderlust Inc. All rights reserved.
      </div>
    </div>
  );
}

export default App;
