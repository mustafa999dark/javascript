// Exercise no : 4

alert(`Exercise 4: Find the Largest of Two Numbers`);
alert(`Output...`);

let heading1 =`Output`;
let a = prompt(`Enter first integer value`);
let b = prompt(`Enter second integer value`);

a = parseInt(a);
b = parseInt(b);

let largest;

if(a > b){
    largest = a;
}
else if (a < b){
    largest = b;
}
else if(a === b){
    largest = `Both are Equal`;
}
else{
    alert(`Error`);
}
document.getElementById(`head`).innerHTML=heading1;
document.getElementById(`ans`).innerHTML=`The largest number is: ${largest}`;

alert(`How to do this??
Check the source code in browser`);


let heading2 =`Source Code`;
let sourceCode =`let a = prompt(\`Enter first integer value\`);
let b = prompt(\`Enter second integer value\`);
let largest;
\n
if(a > b){
    largest = a;
}
\n    
else if (a < b){
    largest = b;
}
\n    
else if(a == b){
    largest = \`Both are Equal\`;
}
\n    
else{
    alert(\`Error\`);
}
\n    
document.getElementById(\`ans\`).innerHTML=\`The largest number is: \${largest}\`;`

document.getElementById(`head1`).innerHTML=heading2;
document.getElementById(`para`).innerHTML=`<pre>${sourceCode}</pre>`;