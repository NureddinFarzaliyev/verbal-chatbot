import React, { useState, useEffect } from 'react'

import GetAnswer from './getAnswer';

let recognition = null;

const SpeechRecognition = () => {
    const [prompt, setPrompt] = useState('');
    // const [isListening, setIsListening] = useState(false)
    
    const handleStart = () => {
        if('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            recognition = new window.webkitSpeechRecognition();

            // recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                const result = event.results[event.results.length - 1];
                const speech = result[0].transcript;
                setPrompt(speech);
            };

            document.querySelector('.micImg').classList.add('micAnim')

            recognition.start();
            console.log('speech recognition started')
            // setIsListening(true)

            recognition.onend = () => {
                console.log('ended')
                document.querySelector('.micImg').classList.remove('micAnim')
            }
        }else{
            console.log('speech recognition NOT supported')
        }
    }

    
    
    return (
        <div className='md:flex h-[40rem]'>
            <div className='h-64 md:h-auto md:w-[50%] flex items-center justify-center mt-6 mb-12 md:mt-32'>
                <button onClick={handleStart} className='flex justify-center items-center'>
                    <div className='outerCircle h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem] rounded-full transition-all bg-[#39FF14] flex justify-center items-center'>
                        <div className='h-[13rem] w-[13rem] md:h-[17rem] md:w-[17rem] rounded-full bg-black flex justify-center items-center'>
                            <img src="/images/mic.svg" alt="mic" className='micImg' />
                        </div>
                    </div>
                </button>
            </div>

            <div className='md:w-[50%] md:bg-[#6CAD60] md:bg-opacity-[0.2] h-[200rem]'>
                <GetAnswer prompt={prompt}/>
            </div>
        </div>
    )
}

export default SpeechRecognition