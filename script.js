let weather= {
    "apiKey":"ab7e54fdd9704f85cacb907d5b11d504",
    fetchWeather:function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metru=ic&appid=" 
         + this.apiKey
        )
        .then((Response) =>Response.json())
        .then((data) => this.displayWeather(data));
      },
      displayWeather: function(data){
        const {name}=data;
        const { icon , description }=data.weather[0];
        const {temp,humidity} =data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        console.log(icon)
        document.querySelector(".city").innerHTML="weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp +"°C";
        document.querySelector(".humidity").innerHTML=humidity +"%";
        document.querySelector(".wind").innerHTML=speed+"km/hr";
      },
      search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
      }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
weather.fetchWeather("Denver");