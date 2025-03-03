// Exercise no : 6

alert(`Exercise 6: Login System with Username and Password`);
alert(`Output`);

let heading =`Output..`

let login = prompt(`Enter the username`);
let login1 = prompt(`Enter the password`);

let login4;
let login5;


let result;
if(login === "admin" && login1 === "12345"){
   result = "Login successful";
}

else if((login===null || login.trim()==="") &&(login1 === null || login1.trim()==="")){
    alert(`Something missing!! Write again`);
    login4 = prompt(`Enter your username`);
    login5 = prompt(`Enter your password`);
    
    if(login4 === "admin" && login5 === "12345"){
      result ="Login successful";  
    }

    else if ((login4===null || login4.trim()==="") &&(login5 === null || login5.trim()==="")){
        alert("You are just playing with me Error!!!")
    }

    else{
        result = `Invalid credentials`;
    }
}
else{
    result =`Invalid credentials`;
}
document.getElementById(`head`).innerHTML=heading;
document.getElementById(`ans`).innerHTML=result;

alert(`How to do this??
Check the source code from browser`);

let heading2 =`Source Code`;
let sourceCode = `let login = prompt(\`Enter the username\`);
let login1 = prompt(\`Enter the password\`);
\n
let login4;
let login5;
let result;
\n
if(login === "admin" && login1 === "12345"){
   result = "Login successful";
}
\n
else if((login===null || login.trim()==="") &&(login1 === null || login1.trim()==="")){
    alert(\`Something missing!! Write again\`);
    login4 = prompt(\`Enter your username\`);
    login5 = prompt(\`Enter your password\`);
\n    
    if(login4 === "admin" && login5 === "12345"){
      result ="Login successful";  
    }
\n
    else if ((login4===null || login4.trim()==="") &&(login5 === null || login5.trim()==="")){
        alert("You are just playing with me Error!!!")
    }
\n
    else{
        result = \`Invalid credentials\`;
    }
\n        
}
\n    
else{
    result =\`Invalid credentials\`;
}
\n
 document.getElementById(\`ans\`).innerHTML=result;`;
 document.getElementById(`head1`).innerHTML =heading2;
 document.getElementById(`para`).innerHTML=`<pre>${sourceCode}</pre>`;