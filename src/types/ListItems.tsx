import { ItemModel } from "./ItemModel";

export interface ListItemsModel {
  Item: ItemModel;
  index: number;
  id: number;
  onSetDisabled: (value: boolean) => void;
  onLostFocus: (value: string, id: number) => void;
}
