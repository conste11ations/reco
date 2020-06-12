import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Example } from "./Example";
import { Refresh } from "./Refresh";

import "./styles.css";

const Ball = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Example key={count} />
      </div>
    </>
  );
};

render(<Ball />, document.getElementById("root"));

export default Ball;