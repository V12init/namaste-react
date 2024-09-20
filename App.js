const parent = React.createElement("div", { id: "parent" }, React.createElement("div", {id: "child"}, 
[React.createElement("h1",{},"Test"),React.createElement("h2",{},"Test2")]));

const heading = React.createElement("h1",{ id: "heading", xyz:"abc" },"Hello World"); //{} will use to give attribute to tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 //heading element will return a object       

