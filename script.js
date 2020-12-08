function clear_display() {
  document.getElementById("calc-display").value = "";
}
function on_num_click(number_pressed) {
  var initial_value = document.getElementById("calc-display").value;
  document.getElementById("calc-display").value = initial_value + number_pressed;
}
function square_func() {
  var number = document.getElementById("calc-display").value;
  document.getElementById("calc-display").value = number * number;
}
function solve() {
  var equation = document.getElementById("calc-display").value;
  document.getElementById("calc-display").value = eval(equation);
}
function random_func() {
  clear_display();
  document.getElementById("calc-display").value = Math.random().toFixed(5);
}