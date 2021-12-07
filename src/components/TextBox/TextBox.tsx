import React, { useEffect, useState } from "react";
import { TextBoxProps } from "./TextBox.model";
import style from "./TextBox.module.sass";

export default function TextBox(props: TextBoxProps) {
  const [text, setText] = useState("");
  const [txtCls, setTxtCls] = useState(style.txt_as_label);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setText(props.value);
  }, [props.value]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    props.onValueChanged(e.currentTarget.value);
  };

  const onEnter = () => {
    setTxtCls(style.txt_as_input);
  };

  const onLeave = () => {
    if (!focus) {
      setTxtCls(style.txt_as_label);
    }
  };

  const onLostFocus = (e: React.FormEvent<HTMLInputElement>) => {
    setFocus(false);
    setTxtCls(style.txt_as_label);
    props.onLostFocus(e.currentTarget.value, props.id);
  };

  const onFocus = () => {
    setFocus(true);
    setTxtCls(style.txt_as_input);
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      setFocus(false);
      setTxtCls(style.txt_as_label);
    }
  };
  return (
    <input
      type="text"
      className={txtCls}
      value={text}
      readOnly={!focus || undefined}
      onChange={onChange}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onFocus}
      onBlur={onLostFocus}
      onKeyDown={onKeyDown}
    />
  );
}
