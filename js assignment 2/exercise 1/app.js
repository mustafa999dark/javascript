// Exercises no : 1


alert(`Exercise 1: Check if a Number is Positive, Negative, or Zero`);
alert(`Output`);
let heading = `Output`;

 let number = prompt(`Enter your number`);

 let answer;
 if(number > 0){
    answer =`positive`;
 }
 else if (number == 0){
     answer =`negative`;
 }
 else if (number < 0){
    answer =`zero`;
 }
 else {
    alert(`Error`);
 }
 document.getElementById(`head`).innerHTML=heading;
 document.getElementById(`ans`).innerText =`The number is ${answer}`;


 alert(`How to do this??
Check the source code in  Browser`);

let heading2 = `Source Code`;
  

 let explain =`let heading = \`Output\`;

 let number = prompt(\`Enter your number\`);

 let answer;
 \n
 if(number > 0){
    answer = \`positive\`;
 }
 \n   
 else if (number == 0){
     answer = \`negative\`;
 }
\n
 else if (number < 0){
    answer = \`zero\`;
 }
 \n   
 else {
    alert(\`Error\`);
 }
 \n   
 document.getElementById(\`head\`).innerHTML=heading;
 document.getElementById(\`ans\`).innerText =\`The number is \${answer}\`;\``;

 document.getElementById(`head1`).innerHTML=heading2;
 document.getElementById(`para`).innerHTML=`<pre>${explain}</pre>`; 

