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
        className={`mt-6 ${buttonColor} ${buttonWidth} ${textColor} p-4 rounded-lg text-lg font-semibold font-abhaya ${shadowSpread} ${shadowColor}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
