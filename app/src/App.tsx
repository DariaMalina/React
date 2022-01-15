import React, { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState('user');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  const mouseMoveHandler = (ev) => {
    setPos({ x: ev.clientX, y: ev.clientY });
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>
        Ресурс:
        {type}
      </h1>
      <button type="button" onClick={() => { setType('users'); }}>Пользователи</button>
      <button type="button" onClick={() => { setType('todos'); }}>Todo</button>
      <button type="button" onClick={() => { setType('posts'); }}>Посты</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>

    </div>
  );
}

export default App;
