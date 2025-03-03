// Exercise no : 5

alert(`Exercise 5: Check If a Person is Eligible for a Discount`);
alert(`Output`);
alert(`A store  can gives you discount if:
You are a senior citizen OR
You have a membership`)

let heading = `Output`
let discount = prompt(`
Write one for Senior citizen
Write two for a Membership citizen`);
let n1;
let seniorCitizen;
let a1 =`one`;
let a2 =`two`;

let result;
if(discount===a1){
     seniorCitizen = prompt(`If you really a senior citizen Write your age`);
     if(seniorCitizen >=60){
        result =`You are eligible for a discount`;
     }
     else{
        result =`You are not eligible for a discount`;
     } 

}
else if (discount===a2){
    result =`You are eligible for a discount`;
}
else if(discount===null ||discount.trim() === ""){
    n1 = prompt(`You don't write anything please write something!!
Write one for Senior citizen
Write two for a Membership citizen`);
    if(n1===a1){
        seniorCitizen = prompt(`If you really a senior citizen Write your age`);
        if(seniorCitizen >=60){
            result =`You are eligible for a discount`;
         }
         else{
            result =`You are not eligible for a discount`;
         }
    }
    else if( n1===a2){
        result =`You are eligible for a discount`;
    }
    else if (n1===null ||n1.trim() === ""){
       alert(`Sorry you are just wasting my time`);
    }
    else{
        result=`You are not eligible for a discount`
    }
}
else{
    result =`You are not eligible for a discount`
}
document.getElementById(`head`).innerHTML=heading;
document.getElementById(`ans`).innerHTML=result;

alert(`How can do this??
Check the sourcecode from Browser`);

let heading2 =`Source Code`
let sourcecode = `\ let discount = prompt(\`
Write one for Senior citizen
Write two for a Membership citizen\`);
\n
let n1;
let seniorCitizen;
let a1 =\`one\`;
let a2 =\`two\`;
let result;
\n
if(discount===a1){
     seniorCitizen = prompt(\`If you really a senior citizen Write your age\`);
     \n
     if(seniorCitizen >=60){
        result =\`You are eligible for a discount\`;
     }
     \n   
     else{
        result =\`You are not eligible for a discount\`;
     } 
\n
}
else if (discount===a2){
    result =\`You are eligible for a discount\`;
}
\n    
else if(discount===null ||discount.trim() === ""){
    n1 = prompt(\`You don't write anything please write something!!
Write one for Senior citizen
Write two for a Membership citizen\`);
\n
    if(n1===a1){
        seniorCitizen = prompt(\`If you really a senior citizen Write your age\`);
        \n
        if(seniorCitizen >=60){
            result =\`You are eligible for a discount\`;
         }
         else{
            result =\`You are not eligible for a discount\`;
         }
         \n   
    }
    \n     
    else if( n1===a2){
        result =\`You are eligible for a discount\`;
    }
    \n    
    else if (n1===null ||n1.trim() === ""){
       alert(\`Sorry you are just wasting my time\`);
    }
    \n   
    else{
        result=\`You are not eligible for a discount\`
    }
    \n    
}
\n    
else{
    result =\`You are not eligible for a discount\`
}
\n
document.getElementById(\`ans\`).innerHTML=result;
\n`

document.getElementById(`head1`).innerHTML=heading2;
document.getElementById(`para`).innerHTML=`<pre> ${sourcecode}</pre>`;