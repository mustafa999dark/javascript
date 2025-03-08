// Question no : 4

alert(`Question:
A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to order
Show the following message in your browser:
Example:
 “John Doe ordered 5 T-shirt(s) on XYZ Clothing Store”`);

 alert(`Output`);

 let visitorName= prompt(`Enter your name`);
 let productTitle = prompt(`Enter your product e.g:
Shirt , T-shirt , Pant etc`);
let quantity = prompt(`Enter the amount of product you want to order`);

let result = Number(quantity);

document.getElementById(`new`).innerHTML=`${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing Store`;


alert(`How to do this??
Check the Source code in console`);

console.log(` let visitorName= prompt(\`Enter your name\`);
\n
let productTitle = prompt(\`Enter your product e.g:
Shirt , T-shirt , Pant etc\`);
\n
let quantity = prompt(\`Enter the amount of product you want to order\`);
\n
let result = Number(quantity);
\n
document.getElementById(\`new\`).innerHTML=\`\${visitorName} ordered \${quantity} \${productTitle}(s) on XYZ Clothing Store\`;`)

