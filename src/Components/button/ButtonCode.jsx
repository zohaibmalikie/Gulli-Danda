import React from "react";

export default function ButtonCode(props) {
  return (
    <React.Fragment>
      <button type="button" className={props.className} onClick={props.FunctionName}>
        {props.name}
      </button>
    </React.Fragment>
  );
}
