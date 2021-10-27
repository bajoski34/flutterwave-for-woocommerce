import React, { Component, useState } from "react";

const Input = (props) => {
  const bottomNote = props.bottomNote || "";
  const inputWidth = props.inputWidth || "210%";
  const defaultValue = props.defaultValue || "";

  return (
    <div className="settingItem">
      <label className="lb">{props.name}</label>
      <input
        className="flw-inputs"
        type={props.type}
        value={props.value}
        style={{
          width: inputWidth,
          fontFamily: "FlutterwaveRegular",
          color: "#BDBDBD",
          border: "1px solid #E0E0E0",
        }}
        onChange={props.onChange}
      />
      <p className="hookInstruct">{bottomNote}</p>
    </div>
  );
};

export default Input;
