// const snowFall = document.createElement("span");

const snowMaker = () => {
  let snow = document.createElement("div");
  let color_value = 100;
  let colorBG = document.querySelector("body");

  snow.className = "snow";
  console.log(snow);
  const size = Math.random() * 33 + 7 + "px";
  snow.style.width = size;
  snow.style.height = size;

  //   snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.left = Math.random() * 100 + "%";
  snow.style.top = Math.random() * 100 + 50 + "%";
  snow.style.setProperty("--left", Math.random() * 1000 + "px");
  snow.style.filter = `blur(${(0.1 / Math.random()) * 7 + 1}px)`;
  document.body.appendChild(snow);
  setTimeout(() => {
    snow.remove();
  }, 5000);
};
snowMaker();
setInterval(snowMaker, 50);

// body.style.background = `rgba(${color_value * Math.random()}, ${
//   color_value * Math.random()
// }, ${color_value * Math.random()})`;
