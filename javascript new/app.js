 function greet() {
            const name = document.getElementById('nameInput').value;
            document.getElementById('greeting').innerText = name ? `Hello, ${name}!` : "Please enter your name!";
        }

        function changeColor() {
  let colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33F0", "#33FFF0","#ebba34","#7d1643","#0f4757","#57220f" ,"#0d401f","#2f2a61","#47030f"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;}