async function api(){
  try{
  data = fetch('https://restcountries.com/v3.1/all')
    out = await data;
     prom = out.json();
     final = await prom;
     parent  = document.querySelector('.container')
    parent1 = document.querySelector('.row')
     final.forEach(element => {

   
     parent1.innerHTML+=`
          <div class-col col-lg-4 col-sm-12>
          <div class="card">
           <div class="card-header">
           <h5 class="card-title">${element.name.common}</h5>
          </div><br>
            <div class="img">
          <img src="${element.flags.png}">
         </div>
          <div class="card-body">
         <div class="card-text">
         <div>Capital:${element.capital}</div>
         <div>Region:${element.region}</div>
         <div>Country Code:${element.cca3}</div>

         <button class="btn btn-primary" target="_blank" value="${element.name.common}">Click for Weather</button>

          </div>
        </div>
      
      `
      parent.append(parent1)
      
      let btn = document.querySelectorAll(".btn");
      btn.forEach((ele)=>{
        ele.addEventListener("click",()=>{
          let value = ele.value
          console.log(value)
          async function weather(){
            let res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.value}&APPID=92e3d7890b585097988ec7b296561184`)
            let ress = await res
            let res11 = ress.json()
            let res1 = await res11

            console.log(res1)
            ele.innerHTML= `weather: ${res1.weather[0].description}<br>Temp: ${res1.main.temp}<br>Pressure: ${res1.main.pressure}<br>
            lon:${res1.coord.lon}<br>lat${res1.coord.lat}`
           
          }
          weather();
        })
      })
      
     });
    }
     catch(error){
      console.log(error)
     }
    
}
api()