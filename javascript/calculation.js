
function si_calc(){
    var d_calc = document.getElementById("si");
    if (d_calc.style.display =="none") {
      d_calc.style.display = "block";
    } else {
      d_calc.style.display = "none";
    }
}

function simple_interest() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var result = num1 * (num2/100) * num3;
  result = num1+result;
  document.getElementById("result").innerHTML = result;
}

function ci_calc(){
  var d_calc = document.getElementById("ci");
  if (d_calc.style.display =="none") {
    d_calc.style.display = "block";
  } else {
    d_calc.style.display = "none";
  }
}

function compound_interest() {
var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);
var num3 = parseFloat(document.getElementById("num3").value);
var n = parseFloat(document.getElementById("n").value);

var interest = num1 * Math.pow((1 + (num2 / (n * 100))), (n * num2)) - num1;
var result = parseFloat(num1) + parseFloat(num2);

document.getElementById("result").innerHTML = result;
}