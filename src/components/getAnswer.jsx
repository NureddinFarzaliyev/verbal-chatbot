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
        content: prompt, // Add prompt here
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
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  return (
      <div className='mt-36 flex flex-col items-center'>
        <div>
          <div className='opacity-50'>Prompt:</div>
          <div className='promptBox mt-2 overflow-y-scroll relative h-[15rem] w-[25rem] lg:w-[30rem] bg-[#C7C7C7] bg-opacity-[0.1] rounded-lg p-3'>
            {prompt}
            <button onClick={sendRequest} className='absolute right-3 bottom-3 w-[5rem] h-[3rem] bg-[#C7C7C7] opacity-80 hover:opacity-100 rounded-lg flex justify-center items-center'>
              <img src="/images/send.svg" alt="send" />
            </button>
          </div>
        </div>
        <div className='mt-6'>
          <div className='opacity-50'>Answer:</div>
          <div className='answerBox overflow-y-scroll mt-2 h-[15rem] w-[25rem] lg:w-[30rem] bg-[#C7C7C7] bg-opacity-[0.1] rounded-lg p-3'>
            {answer}
          </div>
        </div>
        <TextToSpeech prompt={answer} />
      </div>
    );  

}

export default GetAnswer;
