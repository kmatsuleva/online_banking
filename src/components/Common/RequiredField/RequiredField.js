import React from "react";

const RequiredField = ({ span }) => (
    <span style={span}> * </span>
);

RequiredField.defaultProps = {
    span: {
        color: "red"
    }
  }

export default RequiredField;
