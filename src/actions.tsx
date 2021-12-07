import { NUMBER_OF_EACH_FETCH } from "./common/constants";

const endPoints = {
  loadDefaultAction: "/photos?_start=0&_end=" + NUMBER_OF_EACH_FETCH,
  loadNextAction: (start: number, offset: number) =>
    `/photos?_start=${start}&_end=${start + offset}`
};

/**
 * load firts 10 records from API
 * @param currentIndex current zero-based index of list items
 * @param dataSize number of items to be fetched
 * @returns next number of items to be fetched
 */
export const loadDefault = async () => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_BASE_URL + endPoints.loadDefaultAction
  );
  const data = await response.json();
  return data;
};

/**
 * load more data action
 * @param currentIndex current zero-based index of list items
 * @param dataSize number of items to be fetched
 * @returns next number of items to be fetched
 */
export const loadNextData = async (currentIndex: number, dataSize: number) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_BASE_URL +
      endPoints.loadNextAction(currentIndex, dataSize)
  );
  const data = await response.json();
  return data;
};
