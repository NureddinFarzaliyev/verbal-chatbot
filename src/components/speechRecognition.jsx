import React, { useState, useEffect } from 'react'

import GetAnswer from './getAnswer';

let recognition = null;

const SpeechRecognition = () => {
    const [prompt, setPrompt] = useState('');
    // const [isListening, setIsListening] = useState(false)
    
    const handleStart = () => {
        if('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            recognition = new window.webkitSpeechRecognition();

            console.log('speech recognition supported')
            // recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                const result = event.results[event.results.length - 1];
                const speech = result[0].transcript;
                setPrompt(speech);
            };

            recognition.start();
            // setIsListening(true);
        }else{
            console.log('speech recognition NOT supported')
        }
    }
    
    return (
        <div>
            <button onClick={handleStart} className='hidden'>Start</button> {/* HIDDEN */ }
            <GetAnswer prompt={prompt}/>
      </div>
    )
}

export default SpeechRecognition