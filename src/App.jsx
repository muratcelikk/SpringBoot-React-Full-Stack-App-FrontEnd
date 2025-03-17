import React, { useEffect, useState } from 'react';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    // Spring Boot API'ye istek gönderiyoruz
    fetch('http://localhost:8080/api/hello')
      .then(response => response.text())
      .then(data => setHello(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>{hello || 'Loading...'}</h1>
    </div>
  );
}

export default App;
