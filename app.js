const keypad = document.getElementsByClassName("keypad");
const text1 = document.getElementById("inp1");
const text2 = document.getElementById("inp2");
text1.value = "";
text2.value = "";
console.log(keypad);

keypad[0].addEventListener("click", function (e) {
  //   console.log(e.target);
  if (
    e.target.getAttribute("class") === "keypad" ||
    e.target.getAttribute("class") === "row"
  ) {
  } else {
    if (e.target.innerText.trim() != "=") {
      text1.value = "";
    }

    if (e.target.innerText.trim() === "X") {
      text2.value += "*";
    } else if (
      e.target.getAttribute("id") === "icn" ||
      e.target.getAttribute("class") === "fas fa-backspace"
    ) {
      //   console.log("YES");
      let temp = text2.value.substr(0, text2.value.length - 1);
      text2.value = temp;
    } else if (e.target.innerText.trim() === "C") {
      text2.value = "";
      text1.value = "";
    } else if (e.target.innerText.trim() === "=") {
      try {
        // if expression is not evaluated then catch block will be executed
        text1.value = eval(text2.value);
      } catch (error) {
        console.log(error.message);
        text1.value = "Error";
      }
    } else {
      text2.value += e.target.innerText.trim();
    }
  }
});
