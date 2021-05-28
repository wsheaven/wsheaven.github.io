function add(num1, num2){
    return eval(num1) + eval(num2)
}

const buttonAdd = document.querySelector("#addNumbers");

function addNumbers(){
    let num1 = document.querySelector("#addend1");
    let num2 = document.querySelector("#addend2");
    let sum = add(num1.value, num2.value);
    let sumbox = document.querySelector("#sum");
    sumbox.innerHTML = sum;
}

buttonAdd.addEventListener("click", addNumbers);