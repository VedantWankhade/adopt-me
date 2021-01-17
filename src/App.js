import { createElement } from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Adopt Me"),
    createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanesse",
    }),
    createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot",
    }),
    createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" }),
  ]);
};

render(createElement(App), document.getElementById("root"));
