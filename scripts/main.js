const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.svg") {
    myImage.setAttribute("src", "images/firefox2.svg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.svg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  /*需要用户输入数据，并在用户点击确定后将数据存储在一个变量中*/
  const myName = prompt("Please enter your name.");
  if (myName === null) {
    setUserName();
  } else {
    /*允许将数据存储在浏览器中并供后续获取*/
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool,${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("Name");
  myHeading.textContent = `Moilla is cool,${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
