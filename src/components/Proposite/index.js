import React from "react";
import Show from "../Show";
import { useState } from "react";
function Proposite() {
  const [state, setState] = useState(5);

  return (
    <>
      <button
        className="first-btn"
        onClick={() => {
          setState(5);
        }}
      >
        Show initial value
      </button>
      <Show testFunc={state} />
      <button
        onClick={() => {
          setState(17);
        }}
      >
        Set new value
      </button>
    </>
  );
}

export default Proposite;
