

// hello from rect ...................
//  var h1 = React.createElement("h1", null, "Hello from React!");
// var container = document.getElementById("container");

// var root = ReactDOM.createRoot(container);
// root.render(h1);


// some more content in it................
var h1 = React.createElement("h1", {id:"h1"} ,  "i am h1 Heading .");
var h2 = React.createElement("h2", {id:"h2"} ,  "i am h2 Heading .");

var root = ReactDOM.createRoot(document.querySelector("#container"));

// ek tarika yeh hai mulrtiple elements render karne ka
// root.render([h1, h2]);

// dusra tarika yeh hai ki ek parent element bana do aur usme sare elements daal do
var div = React.createElement("div", {id:"div1"}, [h1, h2]);
root.render(div);
