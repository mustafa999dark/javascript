// Question no : 8

alert(`Question:
Write a script to display this in browser through JS`);

alert(`script:
Yah! I can write HTML content through Javascript`);

alert(`Output...`);

let print =`Yah! I can write HTML content through Javascript`;
document.getElementById(`message`).innerText=print;

alert(`How to do this??
You can see from the console`);


let print1 =` let  print = \`Yah! I can write HTML content through Javascript\`;

document.getElementById(\`message\`).innerText=print;`

console.log(print1);

console.log(`Explaination:
\`let\`: Yeh keyword ek variable declare karne ke liye use hota hai.

\`print\`: Variable ka naam hai.

\`i can write html\`: Yeh string hai jo message variable mein store ki gayi hai.

document.getElementById("message").innerText = message;:

\`document\`: Yeh JavaScript ka object hai jo webpage (HTML document) ko represent karta hai.

\`getElementById("message")\`: Yeh id ke basis par HTML element ko select karta hai. Humne id="message" wala div select kiya hai.

\`.innerText\`: Yeh property HTML element ke content ko set ya get karne ke liye use hoti hai.

\`= print\`: print variable ki value ("i can write html") ko div ke content mein set kar diya gaya hai.`);