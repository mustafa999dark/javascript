// Exercise no : 7


alert(`Exercise 7: Grade System`);
alert(`Output`);
let heading = `Output`;
let  subject1 =prompt(`Enter Your First ( 1 ) Subject Number`);
let subject2 =prompt(`Enter Your Second ( 2 ) Subject Number`);
let subject3 =prompt(`Enter Your Third ( 3 ) Subject Number`);
let subject4 =prompt(`Enter Your First ( 4 ) Subject Number`);
let subject5 =prompt(`Enter Your First ( 5 ) Subject Number`);
subject1 = Number(subject1);
subject2 = Number(subject2);
subject3 = Number(subject3);
subject4 = Number(subject4);
subject5 = Number(subject5);

let totalMarks = 500;
let obtainedMarks = subject1 + subject2 + subject3 + subject4 + subject5;

let percentage = (obtainedMarks/totalMarks)*100;
let result;
if( percentage>=90){
   result = `Grade A`;
}
else if (percentage >=80  && percentage <=89){
    result = `Grade B`;
}
else if ( percentage >=70 && percentage <=79){
    result =`Grade C`;
}
else if (percentage >=60 && percentage <=69){
    result =`Grade D`;
}
else if ( percentage >=50 && percentage <=59){
    result =`Grade E`;
}
else if (percentage <=60){
    result =`Grade F`;
}
else{
    result = `Alien Spotted`;
}
document.getElementById(`head`).innerHTML=heading;
document.getElementById(`ans`).innerHTML=result;


alert(`How to do this
Check the Source code from Browser`);

let heading2 = `Source Code`;
let sourceCode =`let  subject1 =prompt(\`Enter Your First ( 1 ) Subject Number\`);
let subject2 =prompt(\`Enter Your Second ( 2 ) Subject Number\`);
let subject3 =prompt(\`Enter Your Third ( 3 ) Subject Number\`);
let subject4 =prompt(\`Enter Your First ( 4 ) Subject Number\`);
let subject5 =prompt(\`Enter Your First ( 5 ) Subject Number\`);
subject1 = Number(subject1);
subject2 = Number(subject2);
subject3 = Number(subject3);
subject4 = Number(subject4);
subject5 = Number(subject5);
\n
let totalMarks = 500;
let obtainedMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let percentage = (obtainedMarks/totalMarks)*100;
let result;
\n
if( percentage>=90){
   result = \`Grade A\`;
}
\n   
else if (percentage >=80  && percentage <=89){
    result = \`Grade B\`;
}
\n    
else if ( percentage >=70 && percentage <=79){
    result =\`Grade C\`;
}
\n    
else if (percentage >=60 && percentage <=69){
    result =\`Grade D\`;
}
\n    
else if ( percentage >=50 && percentage <=59){
    result =\`Grade E\`;
}
\n    
else if (percentage <=60){
    result =\`Grade F\`;
}
\n    
else{
    result = \`Alien Spotted\`;
}
 \n   
  document.getElementById(\`ans\`).innerHTML=result;  `;
document.getElementById(`head1`).innerHTML=heading2;
document.getElementById(`para`).innerHTML=`<pre>${sourceCode}</pre>`
