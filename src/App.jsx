import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('useffect')
  }, []);

  return (
    <>
    <div>Hello</div>
    </>
  );
}

export default App;
