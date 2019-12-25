import React from "react";
import "./IceJumperPractice.css";

const cssText = `
.App {
  text-align: center;
  
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
}
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-link {
  color: #61dafb;
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
console.log(
  cssText.split("\n").map(line => Array.from(line.matchAll(/a\b/gi)))
);

const IceJumperPractice = () => {
  const [letter, setLetter] = React.useState("");
  const regExp = letter ? new RegExp(letter, "gi") : null;
  return (
    <div className="ice-jumper-practice">
      <pre>{cssText}</pre>
      <pre className="ice-jumper-practic__markers">
        {letter
          ? name(
              cssText.split("\n").map(line => Array.from(line.matchAll(regExp)))
            )
          : null}
      </pre>
      <input
        type="text"
        onChange={({ target: { value } }) => {
          console.log(value);
          setLetter(value);
        }}
      />
    </div>
  );
};

function name(marchResult) {
  return marchResult
    .map(lineMatch => {
      const linesLength = lineMatch.map(({ index }) => index);
      console.log(linesLength);
      const markers = new Array(Math.max(...linesLength, 0)).fill(" ");
      lineMatch.forEach(({ index }) => (markers[index] = "_"));
      return markers.join("");
    })
    .join("\n");
}

export default IceJumperPractice;
