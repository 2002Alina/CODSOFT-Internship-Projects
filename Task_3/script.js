let output = document.getElementById("output")

function clean(){
  output.value = "";
}

function del(){
  output.value = output.value.slice(0,-1);
}

function display(num){
  output.value += num;
}

function calculator(){
  try {
    output.value = eval(output.value);
  } catch (error) {
    alert("invalid")
  }
}

