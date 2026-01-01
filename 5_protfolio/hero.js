
function Hero() {
  return React.createElement(
    "section",
    { className: "hero" },

    React.createElement(
      "div",
      { className: "hero-left" },

        React.createElement(
      "div",
      { className: "stat" },
      React.createElement("h3", null, "+200"),
      React.createElement("p", null, "Project completed")
    ),

      React.createElement(
      "div",
      { className: "stat" },
      React.createElement("h3", null, "+50"),
      React.createElement("p", null, "Startup raised")
    ),

      React.createElement("h1", { className: "title" }, "Hello"),
      React.createElement(
        "p",
        { className: "subtitle" },
        "— It’s D.Nova a design wizard"
      ),

      React.createElement(
        "span",
        { className: "scroll" },
        "Scroll down ↓"
      )
    ),

    React.createElement(
      "div",
      { className: "hero-right" },
      React.createElement("img", {
         src: "./m.jpg",
        className: "hero-img"
      })
    )
  );
}

export default Hero;
