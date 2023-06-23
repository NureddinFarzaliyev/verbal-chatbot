import React from 'react'
import { useEffect } from 'react'

const TextToSpeech = ( {prompt} ) => {
  
    const voices = speechSynthesis.getVoices()[4];

    useEffect(() => {
      if (prompt != '' && prompt) {
        let utterance = new SpeechSynthesisUtterance();
        utterance.voice = voices;
        utterance.text = prompt
        speechSynthesis.speak(utterance)
        console.log('spoken')
      }else{
        console.log('else happened?')
      }
    
    }, [prompt])
}

export default TextToSpeech