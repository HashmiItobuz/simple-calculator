let screen = document.getElementById("calScreen");
const btns = document.querySelectorAll(".cal-btn");
const operators = document.querySelectorAll(".cal-operators");
const equal = document.getElementById("equalOperator");
let clearAll = document.getElementById("clearAllButton");
let addBtn = document.getElementById("addOperator");
let percentBtn = document.getElementById("percentOperator");
let posNegBtn = document.getElementById("posNegOperator");
let clearBtn = document.getElementById("clearButton");
let decimalBtn = document.getElementById("decimalButton");

let result=0;
let number1=0;
let operator=0;
let number2=0;
let num =0;
let count=0;

btns.forEach((element) => {
    element.addEventListener('click', ()=>{
        screen.innerHTML += element.innerHTML;
        number1 = Number(screen.innerHTML);
    });
});

operators.forEach((element) =>{
    element.addEventListener('click', ()=>{
        operator = element.innerHTML;
        screen.innerHTML = element.innerHTML;
        num = Number(number1);
        screen.innerHTML += element.innerHTML;
        screen.innerHTML='';
        count=0;
    });    
});

clearAll.addEventListener('click', ()=>{
    number1=0;
    number2=0;
    num = 0;
    result=0;
    screen.innerHTML ='';
    count=0;
});

equal.addEventListener('click',()=>{
    number2 = Number(screen.innerHTML);
    switch(operator) {
        case '+' :
                result = num + number2;
                number1=result;
                number2=0;
                screen.innerHTML = result; 
                break;
        case '-' :
                result = num - number2;
                screen.innerHTML = result;
                number1=result;
                number2=0;
                break; 
        case 'x' :
                result = num * number2;
                screen.innerHTML = result; 
                number1=result;
                number2=0;
                break;
        case '/' :
                result = num / number2;
                screen.innerHTML = result; 
                number1=result;
                number2=0;
                break;
        default :
                screen.innerHTML = "Error! operator is not correct";      

    }
});

percentBtn.addEventListener("click", ()=>{
    screen.innerHTML = "";
    num = Number(number1);
    result = (num/100);
    screen.innerHTML = result;
});

posNegBtn.addEventListener("click", ()=>{
    let number = screen.innerHTML;
    number1 = number * -1;
    screen.innerHTML = number1;
});

clearBtn.addEventListener("click",()=>{
    let res = screen.innerHTML.slice(0,-1);
    number1 = res;
    screen.innerHTML = number1;  
});

decimalBtn.addEventListener("click", ()=>{
    if(count < 1){
        screen.innerHTML  += decimalBtn.innerHTML;
        count++;
    }
})