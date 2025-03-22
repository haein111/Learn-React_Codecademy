import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
const images = [];

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const showBackground = true;

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

const animalFacts = (
  <div className="animal">
    {showBackground && background}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  if (animals[animalName] && animals[animalName].facts.length > 0) {
    const randomIndex = Math.floor(
      Math.random() * animals[animalName].facts.length
    );
    const fact = animals[animalName].facts[randomIndex];
    document.getElementById("fact").innerHTML = fact;
  } else {
    document.getElementById("fact").innerHTML = "No";
  }
}

root.render(animalFacts);
