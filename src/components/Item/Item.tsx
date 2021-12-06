import React from "react";
import moment from "moment";
import TextBox from "../TextBox/TextBox";
import { setContainerClass } from "../TextBox/TextBox.helper";
import { ListItemsModel } from "../../types/ListItems";

function Item(props: ListItemsModel) {
  const txtChange = (value: string) => {
    props.onSetDisabled(false);
    // setDisabled(false);
    // console.log("value :>> ", value);
  };

  const containerCls = setContainerClass(props.index);
  const item = props.Item;
  return (
    <div className={containerCls}>
      <TextBox value={item.title} onValueChanged={txtChange} />
      <img className="img" src={item.thumbnailUrl} alt={item.title} />
      <div>{moment().format("MM Do, YYYY, H:mm:ss")}</div>
    </div>
  );
}

export default Item;
