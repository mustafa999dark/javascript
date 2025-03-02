// Exercise no : 3

alert(`Exercise 3: Check Voting Eligibility`);
alert(`Output..`);


let heading1 =`Output`;
let age = prompt(`Enter your age`);

let age1;

if(age >=18){
    age1 = `You are eligible to vote`
}
else{
    age1 =`You are  not eligible to vote`
}
document.getElementById(`head`).innerHTML=heading1;
document.getElementById(`ans`).innerHTML=age1;


alert(`How to do this??
Check the source code in browser`);

let heading2 =`Source Code`;
let sourceCode = `let age = prompt(\`Enter your age\`);

let age1;

if(age >=18){
    age1 = \`You are eligible to vote\`
}
else{
    age1 =\`You are  not eligible to vote\`
}`;
document.getElementById(`head1`).innerHTML=heading2;
document.getElementById(`para`).innerHTML=`<pre> ${sourceCode}<pre>`;
