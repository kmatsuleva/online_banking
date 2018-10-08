import React from "react";

const ResultMessage = ({ message, className }) => {
  return (
    <div className={ className }> { message } </div>
  )
}

export default ResultMessage;