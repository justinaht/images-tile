import classNames from "classnames";
import style from "../../App.module.sass";

export const setContainerClass = (idx: number) =>
  classNames({
    [style.tile]: true,
    container: true,
    "bg-gray": idx % 2 === 0,
    "bg-white": idx % 2 !== 0
  });
