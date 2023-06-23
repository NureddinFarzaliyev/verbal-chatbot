import React from 'react'
import { useEffect } from 'react'

const TextToSpeech = ( {prompt} ) => {

    const voice = speechSynthesis.getVoices()[4];

    useEffect(() => {
      if (prompt != '' && prompt) {
        let utterance = new SpeechSynthesisUtterance();
        utterance.voice = voice;
        utterance.text = prompt
        speechSynthesis.speak(utterance)
      }
    
    }, [prompt])

}

export default TextToSpeech