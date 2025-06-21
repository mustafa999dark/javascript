let data = [
    {
        Q: "Q : What is the correct way to declare a variable in JavaScript that can be reassigned later?",
        a: "const myVar = 10;",
        b: "let myVar = 10;",
        c: "static myVar = 10;",
        d: "variable myVar = 10;",
        ans: "ans2",
    },
    {
        Q: "Q :  Which method adds a new element to the end of an array?",
        a: "array.push()",
        b: "array.pop()",
        c: "array.shift()",
        d: "array.unshift()",
        ans: "ans1",
    },
    {
        Q: "Q : What does the === operator check in JavaScript?",
        a: "Only value equality",
        b: "Only type equality",
        c: "Both value and type equality",
        d: "Neither value nor type equality",
        ans: "ans3",
    },
    {
        Q: "Q : Which event occurs when a user clicks on an HTML element?",
        a: "onchange",
        b: "onhover",
        c: "onclick",
        d: "onscroll",
        ans: "ans3",
    },
    
]

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");


question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;


function checkAns() {
    let ans;
    answers.forEach((curElement)=> {
        if (curElement.checked) {
            ans = curElement.id;
            console.log(ans);
            
        }
    })
    return ans;
}

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked = false;
    })
}

function next() {
    let checkeAns = checkAns()

    if (checkeAns == data[num].ans) {
        score++;
    }
    num++;
    disSelect();


    if (num < data.length) {
    question.innerHTML=data[num].Q;
    option1.innerHTML=data[num].a;
    option2.innerHTML=data[num].b;
    option3.innerHTML=data[num].c;
    option4.innerHTML=data[num].d;

} else {
    myScore.innerHTML=`you score ${score}/${data.length} <br/><br/>
    <button onclick= "location.reload()">Play Again</button>`;

    nextBtn.style.display="none";
    
}
}
