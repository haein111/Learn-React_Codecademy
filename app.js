import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
const images = [];
for (const animal in animals) {
  images.push(
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  e.target.alt;
  const randomIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  document.getElementById("fact");
}

root.render(animalFacts);
