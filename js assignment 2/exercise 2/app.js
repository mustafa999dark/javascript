// Exercise no :2



alert(`Exercise 2: Check Even or Odd:`);
alert(`Output.....`);
let heading1 = `Output`;
let value = prompt("Enter the number");

let number1;

if(value % 2 === 0){
    number1 =`Even`;
}
else{
    number1 =`Odd`;
}
document.getElementById(`head`).innerText=heading1;
document.getElementById(`ans`).innerText=`The number is ${number1}`;

alert(`How to do this
Check the source code in Browser`)


let heading2 =`Source Code`;
let sourceCode =`let value = prompt("Enter the number");
\n
let number1;
\n
if(value % 2 === 0){
    number1 =\`Even\`;
}
\n    
else{
    number1 =\`Odd\`;
}
\n    
document.getElementById(\`ans\`).innerText=\`The number is \${number1}\`;`

document.getElementById(`head1`).innerHTML=heading2;
document.getElementById(`para`).innerHTML=`<pre>${sourceCode}`;