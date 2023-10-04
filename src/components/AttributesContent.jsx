import { useState } from "react";
import "../styles/AttributesContent.css";

import { useContext } from "react";
import { DataContext } from "../App.jsx";

const AttributesContent = ({ title, position }) => {


  const { LenoreData } = useContext(DataContext);

  const [isEditing, setIsEditing] = useState(false);
  const [contentText, setContentText] = useState(LenoreData.boxes[position]);

  const editText = (e) => {
    setContentText(e.target.value);
    LenoreData.boxes[position] = e.target.value;
  };

  return (
    <div className="attributes">
      <span className="title">{title}</span>
      {!isEditing ? (
        <p
          className="content"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {contentText}
        </p>
      ) : (
        <div className="textAreaDiv">
          <textarea
            className="content"
            type="text"
            onChange={editText}
            defaultValue={contentText}
          ></textarea>
          <button
            className="button"
            type="button"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AttributesContent;
