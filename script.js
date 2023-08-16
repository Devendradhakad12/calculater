let string = "";
let btns = document.querySelectorAll(".btn")
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", func);
  function func() {
    let out = document.getElementById("ou");

    if (btn.value == "=") {
      string = eval(string);
      out.textContent = string;
    } else if (btn.value == "C") {
      string = " ";
      out.textContent = string;
    } else if (btn.value == "B") {
      var a = out.textContent;
      out.textContent = a.substring(0, a.length - 1);
      string = out.textContent;
    } else {
      string = string + btn.value;
      out.textContent = string;
    }
  }
});
