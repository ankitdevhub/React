// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hello Coder Army"),
//   React.createElement("h2", {}, "This is the unordered list"),
//   React.createElement(
//     "ul",
//     {},
//     React.createElement("li", {}, "HTML"),
//     React.createElement("li", {}, "CSS"),
//     React.createElement("li", {}, "JavaScript"),
//     React.createElement("li", {}, "Git"),
//     React.createElement("li", {}, "TypeScript")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


const element=React.createElement("h1",{id:"first",style:{backgroundColor:"green"}},"Hello Coder Army");

const element2=React.createElement("h2",{},"this is the unorder list");

const div1=React.createElement("div",{},[element,element2]);

// ReactDOM.render(element,document.getElementById("root")); -----------> not valid in react 18,IT WAS SLOW TO FORM RENDER ON THE WEB PAGE
 
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(div1);



