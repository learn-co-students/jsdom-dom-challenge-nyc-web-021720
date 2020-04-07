document.addEventListener("DOMContentLoaded", () => {
  console.log("the dom has loaded");
  // Counter
  const counter = document.querySelector("h1#counter");
  const minus = document.querySelector("button#minus");
  const plus = document.querySelector("button#plus");
  const like = document.querySelector("button#heart");
  const likesUl = document.querySelector("ul.likes");
  const pause = document.querySelector("button#pause");
  let isPause = false;
  let interval = 1;

  if ((isPause = false)) {
    interval = 1;
  } else {
    interval = 1000;
  }

  //Adds 1 to the counter every second
  setInterval(() => {
    counter.innerText = parseInt(counter.innerText) + 1;
  }, interval);

  //Adds 1 to the counter
  plus.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) + 1;
  });

  //Subtracts 1 from the counter
  minus.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1;
  });

  like.addEventListener("click", () => {
    const newLike = document.createElement("li");
    newLike.innerText = counter.innerText;
    likesUl.appendChild(newLike);
  });

  pause.addEventListener("click", () => {
    if (interval === 1000) {
      isPause = true;
    } else {
      isPause = false;
    }
  });
});
