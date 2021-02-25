import React from 'react';
import { ContentSection } from './components/ContentSection/ContentSection';
import { LandingPage } from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="flex flex-col font-roboto">
      <LandingPage />
      <ContentSection />
    </div>
  );
}

export default App;