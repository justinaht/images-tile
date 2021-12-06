import { ItemModel } from "./ItemModel";

export interface ListItemsModel {
  Item: ItemModel;
  index: number;
  onSetDisabled: (value: boolean) => void;
}
