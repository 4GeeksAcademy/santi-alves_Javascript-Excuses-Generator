/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const excuseParagraph = document.querySelector("#excuse");

  function getRandomWord(arrayOfWords) {
    const randomIndex = Math.floor(Math.random() * arrayOfWords.length);

    return arrayOfWords[randomIndex];
  }

  function excusesGenerator(whoArray, actionArray, whatArray, whenArray) {
    const randomWho = getRandomWord(whoArray);
    const randomAction = getRandomWord(actionArray);
    const randomWhat = getRandomWord(whatArray);
    const randomWhen = getRandomWord(whenArray);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  excuseParagraph.innerHTML = excusesGenerator(who, action, what, when);
};
