
import Navbar from "./nav.js";
 import Hero from "./hero.js";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Navbar),
     React.createElement(Hero)
  );
}

export default App;
