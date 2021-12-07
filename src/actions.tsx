import { NUMBER_OF_EACH_FETCH } from "./common/constants";

const endPoints = {
  loadDefaultAction: "/photos?_start=0&_end=" + NUMBER_OF_EACH_FETCH,
  loadNextAction: (start: number, offset: number) =>
    `/photos?_start=${start}&_end=${start + offset}`
};

export const loadDefault = async () => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_BASE_URL + endPoints.loadDefaultAction
  );
  const data = await response.json();
  return data;
};

export const loadNextData = async (currentIndex: number, dataSize: number) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_BASE_URL +
      endPoints.loadNextAction(currentIndex, dataSize)
  );
  const data = await response.json();
  return data;
};
