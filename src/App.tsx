import React from 'react';
import Carousel from './components/Carousel/Carousel';
import { ContentSection } from './components/ContentSection/ContentSection';
import { LandingPage } from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="flex flex-col font-roboto">
      {/* <Navbar/> */}
      <LandingPage />
      <ContentSection />
      <Carousel>
        <div className="w-screen bg-red-300">test1</div>
        <div className="w-screen bg-green-300">test1</div>
        <div className="w-screen bg-blue-300">test1</div>
      </Carousel>
    </div>
  );
}

export default App;
