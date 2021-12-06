import React, { useEffect, useState } from "react";
import "./App.sass";
import { ItemModel } from "./types/ItemModel";
import loader from "./assets/loading.gif";
import { NUMBER_OF_EACH_FETCH } from "./common/constants";
import { loadDefault, loadNextData } from "./actions";
import Item from "./components/Item/Item";

function App() {
  const [images, setImages] = useState<ItemModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisabled] = useState(true);

  async function loadDefaultData() {
    const data = await loadDefault();
    setImages(data);
  }

  // didmount
  useEffect(() => {
    loadDefaultData();
  }, []);

  async function fetchMoreData() {
    setLoading(true);
    const data = await loadNextData(images.length, NUMBER_OF_EACH_FETCH);
    setLoading(false);
    setImages([...images, ...data]);
  }
  const [index, setIndex] = useState(0);

  const onLoadMore = async () => {
    fetchMoreData();
    setIndex(index + NUMBER_OF_EACH_FETCH);
  };

  const onReset = () => {
    setImages(images);
    setDisabled(true);
  };

  const onUpdate = () => {
    setImages(images);
    setDisabled(true);
  };

  return (
    <div className="App">
      {images.map((item: ItemModel, index: number) => (
        <Item
          Item={item}
          index={index}
          onSetDisabled={setDisabled}
          key={item.id}
        />
      ))}
      {loading && <img src={loader} alt="Loading icon" />}
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
