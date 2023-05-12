const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");
const keys = document.querySelectorAll(".key");
const screen = document.querySelector(".display");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");

keys.forEach(function (key) {
  key.addEventListener("click", function (e) {
    let val = e.target.innerText;
    screen.value += val;   
  });
});

theme1.addEventListener("click", function () {
  document.body.classList.remove("theme-1");
  document.body.classList.remove("theme-2");
});
theme2.addEventListener("click", function () {
  document.body.classList.add("theme-1");
  document.body.classList.remove("theme-2");
});
theme3.addEventListener("click", function () {
  document.body.classList.remove("theme-1");
  document.body.classList.add("theme-2");
});

reset.addEventListener("click", function () {
  screen.value = "";
});

del.addEventListener("click", function () {
  let inputField = screen.value;
  inputField = inputField.slice(0, -1);
  screen.value = inputField;
});

equal.addEventListener('click',function (e) {
    let sumX =  screen.value
    
    if(eval(sumX) == null){
        alert('please enter a number')
    }else{
        screen.value = eval(sumX)
    }
})

