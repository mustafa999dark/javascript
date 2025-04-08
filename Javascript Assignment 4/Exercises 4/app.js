


function stringRepeater(a , b){
 if(a === b){
    for(b = 0 ; b >a ; b++){
        return a;
    }
 }
    
}
let a = prompt(`ENTER ANYTHING`);

b = parseInt(prompt(`Enter times`));
let result = stringRepeater(a, b);
console.log(result);