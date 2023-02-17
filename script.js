const font = document.querySelectorAll(".font");
body = document.body;
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btns");
const number = document.querySelector(".number");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const themeA = document.querySelector("#theme0");
const themeB = document.querySelector("#theme1");
const themeC = document.querySelector("#theme2");
const inpCol = document.querySelectorAll(".inpCol");
const clr = document.querySelectorAll(".clr");
const inputKeys = document.querySelector(".inputKeys");

number.value = "";

let numbers = [];

//functions
btns.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    e.preventDefault();

    //   console.log(e.target.classList);
    numbers.push(e.target.value);
    number.value = numbers.join("");
  });
});

del.addEventListener("click", () => {
  numbers.pop();
  number.value = numbers.join("");
});

reset.addEventListener("click", () => {
  numbers = [];
  number.value = "";
});

equal.addEventListener("click", () => {
  let answer = eval(number.value);
  number.value = answer;
});

themeA.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(222, 26%, 31%)";
  font.forEach((f) => {
    f.style.color = "white";
  });
  number.style.backgroundColor = "";
  inpCol.forEach((n) => {
    n.style.backgroundColor = "hsl(224, 36%, 15%)";
  });
  btns.forEach((b) => {
    b.style.backgroundColor = "hsl(30, 25%, 89%)";
    b.style.boxShadow = "0 2px 4px hsl(224, 28%, 35%)";
    b.style.color = "hsl(221, 14%, 31%)";
  });
  clr.forEach((c) => {
    c.style.backgroundColor = "hsl(225, 21%, 49%)";
    c.style.boxShadow = "0 2px 4px hsl(225, 21%, 49%)";
  });
  equal.style.backgroundColor = "hsl(6, 63%, 50%)";
  equal.style.boxShadow = "0 2px 4px hsl(6, 70%, 34%)";
  inputKeys.style.backgroundColor = "hsl(223, 31%, 20%)";
});

themeB.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  font.forEach((f) => {
    f.style.color = "black";
  });
  inpCol.forEach((n) => {
    n.style.backgroundColor = "hsl(0, 5%, 81%)";
  });
  number.style.backgroundColor = "hsl(0, 0%, 93%)";
  btns.forEach((b) => {
    b.style.backgroundColor = "hsl(30, 25%, 89%)";
    b.style.boxShadow = "0 2px 4px hsl(35, 11%, 61%)";
    b.style.color = "hsl(60, 10%, 19%)";
  });
  clr.forEach((c) => {
    c.style.backgroundColor = "hsl(185, 42%, 37%)";
    c.style.boxShadow = "0 2px 4px hsl(185, 58%, 25%)";
  });
  equal.style.backgroundColor = "hsl(25, 98%, 40%)";
  equal.style.boxShadow = "0 2px 4px hsl(25, 99%, 27%)";
  inputKeys.style.backgroundColor = "hsl(0, 5%, 81%)";
});

themeC.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  font.forEach((f) => {
    f.style.color = " hsl(52, 100%, 62%)";
  });
  inpCol.forEach((n) => {
    n.style.backgroundColor = "hsl(268, 71%, 12%)";
  });
  number.style.backgroundColor = "hsl(268, 71%, 12%)";
  btns.forEach((b) => {
    b.style.backgroundColor = "hsl(281, 89%, 26%)";
    b.style.boxShadow = "0 2px 4px hsl(285, 91%, 52%)";
    b.style.color = "hsl(52, 100%, 62%)";
  });
  clr.forEach((c) => {
    c.style.backgroundColor = "hsl(268, 47%, 21%)";
    c.style.boxShadow = "0 2px 4px hsl(290, 70%, 36%)";
  });
  equal.style.backgroundColor = "hsl(176, 100%, 44%)";
  equal.style.boxShadow = "0 2px 4px hsl(177, 92%, 70%)";
  equal.style.color = "black";
  inputKeys.style.backgroundColor = "hsl(268, 71%, 12%)";
});
