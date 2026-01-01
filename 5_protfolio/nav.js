
function Navbar() {
    return    React.createElement(
        "nav",
        { id: "nav-bar" },
        React.createElement("h3", null, "DNova"),

        // nav-menu
        React.createElement(
            "ul",
            { id: "menu" },
            React.createElement("li", null, "About"),
            React.createElement("li", null, "Portfolio"),
            React.createElement("li", null, "Services"),
            React.createElement("li", null, "Blog"),
        ),

        // nav button 
      React.createElement(
  "a",
  {
    id: "btn",
    href: "#"
  },
  "Book a call"
)

    );
}

 export default Navbar;

