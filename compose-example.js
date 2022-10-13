import { compose } from "redux";

console.log({ compose });

const composeExample = () => {
  const makeLouder = (str) => str.toUpperCase();
  const repeatThreeTimes = (str) => str.repeat(3);
  const embolden = (str) => str.bold();
  const log = (str) => {
    console.log(str);
    return str;
  };

  // call functions from right-to-left or bottom-to-up
  const result = compose(
    log,
    embolden,
    log,
    repeatThreeTimes,
    log,
    makeLouder,
    log
  )("Hello World");

  const div = document.createElement("div");

  div.innerHTML = result;

  document.querySelector("body").append(div);
};

export default composeExample;
