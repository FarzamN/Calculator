let screen = document.getElementById('show');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}




 







function mainhistory() {
return document.getElementById("past").innerText;
}
function printhistory(num){
    document.getElementById("past").innerText=num;
}
function output(){
    return document.getElementById('show').innerText
}
function printoutput(num){
    if (num=="") {
        document.getElementById('show').innerText=num;
    } 
    else{
    document.getElementById("show").innerText=getFormatedNumber(num);
    }
}
function getFormatedNumber(num){
var n = Number(num);
var value = n.toLocaleString(`en`);
return value;
}
function reserveNumberFormate(num){
    return Number(num.replace(/,/g,''));
}
var operation = document.getElementsByClassName("ops");
for (let i = 0; i < operation.length; i++) {
 operation[i].addEventListener(`click`,function(){
     
 })
}
var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
 number[i].addEventListener(`click`,function(){
var output=reserveNumberFormate(output());
if(output!=NaN){
    output=output+this.id;
    printoutput(output);
}
 });
}