import React, { Component } from "react";

const Button = (props) => {
  if (props.onClick) {
    return (
      <div className="flw-btn">
        <button
          style={{
            backgroundColor: bg,
            color,
            padding: "9px, 16px, 9px, 16px",
            fontSize: "12px",
            borderRadius: "4px",
            border: "none",
            width: "113px",
            height: "32px",
          }}
          onClick={props.onClick}
        >
          {name}
        </button>
      </div>
    );
  }
  const { color, name, bg } = props;
  return (
    <div className="flw-btn">
      <button
        style={{
          backgroundColor: bg,
          color,
          padding: "9px, 16px, 9px, 16px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "none",
          width: "113px",
          height: "32px",
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
