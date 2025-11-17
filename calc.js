let input = document.getElementById("input");

function btnClick(value) {
    if (value === "AC") {
        input.value = "";
    }
    else if (value === "DEL") {
        input.value = input.value.slice(0, -1);
    }
    else if (value==="="){
        input.value=eval(input.value);
    }
    else{
        input.value +=value;
    }

    

}