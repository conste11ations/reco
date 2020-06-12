import * as React from "react";
import { render } from "react-dom";
import { Animation } from "./Animation";
import "./styles.css";

const Ball = () => {
  return (
    <div>
      <div className="Ball1-container" style={{ margin: "100px", position: "absolute" }}>
        <Animation duration={3} />
      </div>
      <div className="Ball2-container" style={{ marginTop: "675px", marginLeft: "500px", position: "absolute" }}>
        <Animation duration={4} />
      </div>
      <div className="Ball3-container" style={{ marginLeft: "500px", position: "absolute" }}>
        <Animation duration={5} />
      </div>
      <div className="Ball4-container" style={{ marginLeft: "1200px", marginTop: "420px", position: "absolute" }}>
        <Animation duration={6} />
      </div>
      <div className="Ball5-container" style={{ marginLeft: "800px", marginTop: "300px", position: "absolute" }}>
        <Animation duration={7} />
      </div>
      <div className="Ball6-container" style={{ marginLeft: "1450px", marginTop: "100px", position: "absolute" }}>
        <Animation duration={7} />
      </div>
    </div>
  );
};

render(<Ball />, document.getElementById("root"));

export default Ball;