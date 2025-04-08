
function findMax (a , b , c){
    if(a >= b && a >= c){
        return a;
    }

    if (b >= a && b >= c){
        return b;
    }

    if (c >= a && c >= b){
        return c;
    } 
}

let a = parseInt(prompt(`ENTER FIRST INTEGER VALUE`));
let b = parseInt(prompt(`ENTER SECOND INTEGER VALUE`));
let c = parseInt(prompt(`ENTER THIRD INTEGER VALUE`));
let result = findMax(a , b , c);

console.log ( result);



