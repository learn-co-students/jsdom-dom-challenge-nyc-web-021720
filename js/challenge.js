document.addEventListener("DOMContentLoaded", () => {
  console.log("the dom has loaded");
  // Counter
  const counter = document.querySelector("h1#counter");
  setInterval(() => {
    //   Adds 1 to the counter every second
    counter.innerText = parseInt(counter.innerText) + 1;
  }, 1000);
});
