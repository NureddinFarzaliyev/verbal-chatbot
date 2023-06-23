import React, { useState } from 'react';

import TextToSpeech from './textToSpeech';

const GetAnswer = ( { prompt } ) => {

  const [answer, setAnswer] = useState(' ');

  const apiUrl = 'https://api.pawan.krd/v1/chat/completions';
  const apiKey = 'pk-WOrDMwbGDnQRgKXekcEstxghWXWCZlJDlPkWMOxrVfHCetOU';

  const requestData = JSON.stringify({
    model: 'gpt-3.5-turbo',
    max_tokens: 100,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    });

  const sendRequest = () => {
    console.log('request sent')
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: requestData,
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.choices[0].message.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  return (
      <>
        <button onClick={sendRequest} className='hidden'>Send</button> {/* HIDDEN */ }
        <div>{prompt}</div>
        <div>{answer}</div>
        <TextToSpeech prompt={answer} />
      </>
    );  

}

export default GetAnswer;
