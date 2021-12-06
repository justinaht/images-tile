import React, { useEffect, useState } from "react";
import style from "./App.module.sass";
import "./App.sass";
import { Image } from "./types/image";
import classNames from "classnames";
import TextBox from "./components/TextBox/TextBox";
import { NUMBER_OF_EACH_FETCH } from "./common/constants";

function App() {
  const [images, setImages] = useState<Image[]>([]);

  async function loadDefaultData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
    );
    const data = await response.json();
    setImages(data);
  }

  async function fetchMoreData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${
        images.length
      }&_end=${images.length + NUMBER_OF_EACH_FETCH}`
    );
    const data = await response.json();
    setImages([...images, ...data]);
  }
  const [index, setIndex] = useState(0);

  // didmount
  useEffect(() => {
    loadDefaultData();
  }, []);

  const onLoadMore = async () => {
    fetchMoreData();
    setIndex(index + 10);
  };

  const setContainerClass = (idx: number) =>
    classNames({
      [style.tile]: true,
      container: true,
      "bg-gray": idx % 2 === 0,
      "bg-white": idx % 2 !== 0,
    });

  const txtChange = (e: string) => {
    // console.log('e :>> ', e);
  };

  return (
    <div className="App">
      <div className="flex">
        {images.map((item: Image, index: number) => {
          const containerCls = setContainerClass(index);
          return (
            <div className={containerCls} key={item.id}>
              <div className="label">
                <TextBox value={item.title} onValueChanged={txtChange} />
              </div>
              <img className="img" src={item.thumbnailUrl} alt={item.title} />
            </div>
          );
        })}
      </div>
      <button onClick={onLoadMore}>Load more data</button>
    </div>
  );
}

export default App;
