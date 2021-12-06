import React, { useEffect, useState } from 'react';
import style from './App.module.sass';
import { Image } from './types/image';

function App() {
  const [images, setImages] = useState([
    
  ])

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await response.json()
      setImages(data)
    }

    fetchMyAPI()
  }, [images])

  return (
    <div className="App">
      {images.map((item: Image, index: number) => {
        return (
          <div className={style.tile} key={item.id}>
            {item.title}
          </div>
        )
      })}
    </div>
  );
}

export default App;
