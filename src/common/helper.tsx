import { ItemModel } from "../types/ItemModel";
import { LOCALSTORAGE_KEY } from "./constants";

/**
 * set list items model to localStorage
 * @param images items to set to localStorage
 * @returns list items model
 */
export function setLocalStorage(images: ItemModel[]) {
  const json = JSON.stringify(images);
  localStorage.setItem(LOCALSTORAGE_KEY, json);
}

/**
 * get list items model from localStorage
 * @returns list items model
 */
export function getLocalStorage(): ItemModel[] {
  const imagesStr = localStorage.getItem(LOCALSTORAGE_KEY);
  if (imagesStr) {
    return JSON.parse(imagesStr) as ItemModel[];
  }
  return [] as ItemModel[];
}
