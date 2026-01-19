const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello Coder Army"),
  React.createElement("h2", {}, "This is the unordered list"),
  React.createElement(
    "ul",
    {},
    React.createElement("li", {}, "HTML"),
    React.createElement("li", {}, "CSS"),
    React.createElement("li", {}, "JavaScript"),
    React.createElement("li", {}, "Git"),
    React.createElement("li", {}, "TypeScript")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);