import React from "react";

function Exponent({ key, num, exponent }) {
  const getMultiplicationString = (num, exponent) => {
    return Array(exponent).fill(num).join(" * ");
  };

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}^{exponent}
      </p>
      <p className="exponent-result">
        {getMultiplicationString(num, exponent)} ={" "}
        <span className="total"> {Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
}

export default Exponent;