import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Img from "./img.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML += myName("Joe");
  element.classList.add("hello");

  const myImg = new Image();
  myImg.src = Img;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
