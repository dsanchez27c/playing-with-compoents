import React from "react";
import DevIcon from "../icon/DevIcon";

function Item({ text, handleDelete }) {
  return (
    <li>
      {text}
      <button onClick={handleDelete}>
        <DevIcon iconName="trash" iconColor="#1e3050" size={20} />
      </button>
    </li>
  );
}

export default Item;
