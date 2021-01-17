import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  /*   return createElement("div", {}, [
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
  ]); */

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Peep" animal="Birb" breed="Parrot" />
      <Pet name="Doink" animal="Cat" breed="Stray" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
