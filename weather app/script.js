const con1 = document.querySelector(`main`);  
const search = document.querySelector(`.search-box button`);
const weatherBox = document.querySelector(`.w-main`);
const weatherD = document.querySelector(`.weather-d`);
const error = document.querySelector(`.not`);

search.addEventListener(`click`, ()=> {

  const apiKey = `2360e93cd877ac2fbac89fd6bb8e5772`;
   const city = document.querySelector(`.search-box input`).value;
    
   if(city == ``)
    return

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(response => response.json( ))
   .then(json => {
   

    if(json.cod =="404"){
      con1.style.height=`40em`;
      weatherBox.classList.remove(`active`);
      weatherD.classList.remove(`active`);
      error.classList.add(`active`);
    }
    else{
    con1.style.height=`50.5em`;
      weatherBox.classList.add(`active`);
      weatherD.classList.add(`active`);
      error.classList.remove(`active`);
    }
    const image = document.querySelector(`.w-main .new`);
    const temp = document.querySelector(`.w-main .temperature`);
    const decrip = document.querySelector(`.w-main .description`);
    const humidity = document.querySelector(`.weather-d .humidity .text .info span`);
    const wind = document.querySelector(`.weather-d .wind .text .info-w span`);

   if(json.weather[0].main==`Clear`){
    image.src = `all/clear.png`; }
   else if(json.weather[0].main==`Rain`){
    image.src = `all/rain.png`;}
    else if(json.weather[0].main == `Snow`){
     image.src = `all/snow.png`;}
    else if(json.weather[0].main == `Clouds`){
     image.src = `all/cloud.png`;}
    else if(json.weather[0].main == `Mist`){
     image.src = `all/mist.png`;}   
    else if(json.weather[0].main == `Haze`){
     image.src = `all/mist.png`;}
    else{
     image.src = `all/cloud.png`;}   



     temp.innerHTML=`${parseInt(json.main.temp)}<span>&deg;C </span>`;
     decrip.innerHTML=`${json.weather[0].description}`;
     humidity.innerHTML=`${json.main.humidity}%`;
     wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
   });
     

   


} );