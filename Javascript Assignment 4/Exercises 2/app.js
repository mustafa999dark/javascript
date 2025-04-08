
function check (a){
    if( a % 2 === 0  ){
     return "The number is even"
    }

    if ( a % 2 !== 0 ){
        return "The number is odd"
    }
}

let a= parseInt(prompt(`Enter any integer number For checking even or odd`));
let result = check (a);
console.log(result);
