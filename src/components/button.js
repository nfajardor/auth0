import "../styles/style.css";

import ThemeContext from "../contexts/themecontext";

function Button() {
  return (
    <ThemeContext.Consumer>
      {(value) => {
      console.log("value from button: " + value);
      <button className={value}>Submit</button>}}
    </ThemeContext.Consumer>
  );
}

export default Button;
