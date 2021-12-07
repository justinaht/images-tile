import { ItemModel } from "../types/ItemModel";
import { LOCALSTORAGE_KEY } from "./constants";

export function setLocalStorage(images: ItemModel[]) {
  const json = JSON.stringify(images)
  localStorage.setItem(LOCALSTORAGE_KEY, json)
}

export function getLocalStorage(): ItemModel[] {
  const imagesStr = localStorage.getItem(LOCALSTORAGE_KEY)
  if (imagesStr) {
    return JSON.parse(imagesStr) as ItemModel[]
  }
  return [] as ItemModel[]
}