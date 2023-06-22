import React, { useState, useEffect } from 'react'

let recognition = null;

const SpeechRecognition = () => {
    const [prompt, setPrompt] = useState('');
    const [isListening, setIsListening] = useState(false)
    
    const handleStart = () => {
        if(!isListening) {
            recognition = new window.webkitSpeechRecognition();

            // recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                const result = event.results[event.results.length - 1];
                const speech = result[0].transcript;
                setPrompt(speech);
            };

            recognition.start();
            setIsListening(true);
        }
    }

    const handleStop = () => {
        if (isListening && recognition) {
          recognition.stop();
          setIsListening(false);
        }else{
            console.log('else happened')
        }

        console.log(prompt)
    };

    return (
        <div>
            <h1>hi</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <p>{prompt}</p>
      </div>
    )
}

export default SpeechRecognition