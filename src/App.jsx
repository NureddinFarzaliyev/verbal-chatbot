import React, { useEffect } from 'react';

import Nav from './components/nav';
import SpeechRecognition from './components/speechRecognition';

function App() {
  return (
    <div className='bg-black min-h-screen min-w-screen overflow-hidden font-font-text'>
      <Nav/>
      <SpeechRecognition/> 
    </div>
  );
}

export default App;
