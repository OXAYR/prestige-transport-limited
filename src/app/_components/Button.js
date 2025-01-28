/** @format */

import React from "react";

function Button({
  buttonColor,
  buttonWidth,
  textColor,
  shadowColor,
  shadowSpread,
  buttonText,
  onButtonClick,
}) {
  return (
    <div>
      <button
        className={`mt-6 ${buttonColor} ${buttonWidth} ${textColor} px-4 py-2 sm:px-4 sm:py-4 rounded-lg text-lg font-semibold font-abhaya ${shadowSpread} ${shadowColor}`}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
