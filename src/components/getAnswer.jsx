import React, { useEffect } from 'react';

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
      content: 'What is Azerbaijan?',
    },
  ],
});

const sendRequest = () => {
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
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function App() {
  useEffect(() => {
    console.log('useffect')
  }, []);

  return (
    <>
      <div>Hello</div>
      <button onClick={sendRequest}>Batni</button>
    </>
  );
}

export default App;
