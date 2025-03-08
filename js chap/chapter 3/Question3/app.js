// Question no :3 

alert(`Question:
Declare a variable called birthYear & assign to it yourbirth year. Show the following message in your browser:`);
alert(`Output..`);

let birthYear = prompt(`What is your age`);

let result = Number(birthYear);

document.getElementById(`birth year`).innerHTML=`My birth year is  ${result}`;
document.getElementById(`type`).innerHTML=`Data type pf my declared variable is ${typeof result}`;

alert(`How to do this??
Check the source code in console`);

console.log(`Let birthYear = prompt(\`What is your age\`);
\n
let result = Number(birthYear);
\n
document.getElementById(\`birth year\`).innerHTML=\`My birth year is  \${result}\`;
\n
document.getElementById(\`type\`).innerHTML=\`Data type pf my declared variable is \${typeof result}\`;`);