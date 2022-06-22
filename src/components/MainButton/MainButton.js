import React from "react";

import "./MainButton.scss";

const MainButton = (props) => {
  const { btnText, onSubmit } = props;
  return (
    <div onClick={onSubmit} className="main-button">
      <button>
        <div className="second-border">{btnText}</div>
      </button>
    </div>
  );
};

export default MainButton;
