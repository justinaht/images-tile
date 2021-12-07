import React, { useEffect, useState } from "react";
import "./App.sass";
import { ItemModel } from "./types/ItemModel";
import { NUMBER_OF_EACH_FETCH } from "./common/constants";
import { loadDefault, loadNextData } from "./actions";
import Item from "./components/Item/Item";
import Popup from "./components/Popup/Popup";
import { getLocalStorage, setLocalStorage } from "./common/helper";

function App() {
  const [images, setImages] = useState<ItemModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisabled] = useState(true);

  async function loadDefaultData() {
    const data = await loadDefault();
    setLocalStorage(data);
    setImages(data);
  }

  // componentDidMount
  useEffect(() => {
    loadDefaultData();
  }, []);

  async function fetchMoreData() {
    setLoading(true);
    const data = await loadNextData(images.length, NUMBER_OF_EACH_FETCH);
    setLoading(false);
    const imagesOriginal = getLocalStorage();
    setLocalStorage([...imagesOriginal, ...data]);
    setImages([...images, ...data]);
  }
  const [index, setIndex] = useState(0);

  const onLoadMore = async () => {
    fetchMoreData();
    setIndex(index + NUMBER_OF_EACH_FETCH);
  };

  const onReset = () => {
    const imageReset = getLocalStorage();
    setImages(imageReset);
    setDisabled(true);
  };

  const onUpdate = () => {
    setLocalStorage(images);
    setImages(images);
    setDisabled(true);
  };

  const txtOnLostFocus = (txt: string, id: number) => {
    const imagesEdited = images.map((e: ItemModel, i: number) => {
      if (e.id === id) {
        e.title = txt;
      }
      return e;
    });
    setImages(imagesEdited);
  };

  return (
    <div className="App">
      {loading && <Popup />}
      {images.map((item: ItemModel, index: number) => (
        <Item
          Item={item}
          index={index}
          onSetDisabled={setDisabled}
          onLostFocus={txtOnLostFocus}
          key={item.id}
          id={item.id}
        />
      ))}
      <button onClick={onUpdate} disabled={disable}>
        Confirm Update
      </button>
      <button onClick={onReset} disabled={disable}>
        Reset
      </button>
      <button onClick={onLoadMore}>Load more data</button>
    </div>
  );
}

export default App;
