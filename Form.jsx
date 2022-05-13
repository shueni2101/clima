import React, { useState,useEffect } from "react";
import List from "./List";
const api=`q=London&appid=fa3dd4e1d5753bebb65b815b24918780&units=metric`;
const api2=`https://api.openweathermap.org/data/2.5/weather?`;
const Form= ()=> {
    const [city,setCity]=useState("");
    const [find,setFind]=useState("");
    const [temp, setTemp]=useState("");
    const [winds, setWinds]=useState("");
    const [cloud, setCloud]=useState("");
    const[clima,setClima]=useState("");
    const [hora,setHora]=useState([]);
const handlerEvent= async (e)=>{    
    e.preventDefault();
        const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${find}&appid=fa3dd4e1d5753bebb65b815b24918780&units=metric`
        const wheatherr= await fetch (apiUrl);
        const wheatherJson= await wheatherr.json();
        const weatherFinal= wheatherJson;
       setCity(wheatherJson);
       setTemp(weatherFinal.main);
       setWinds(weatherFinal.wind);
       setCloud(weatherFinal.clouds);
        setClima(weatherFinal.weather)
}

const data=()=>{
    setInterval(() =>{
    
    if(city!==""){
        let showdate= new Date();
        var localTime= showdate.getTime();
        var offset= showdate.getTimezoneOffset() * 60000;
        var utc= localTime + offset;
        showdate= new Date(utc + 1000 * city.timezone)
        setHora(showdate) 
    }
},1000)
  
}

/*
const getCoords=(e)=>{
    e.preventDefault();

    return navigator.geolocation.getCurrentPosition(findLocation);
}

const findLocation= async (e)=> {
    const latitud= e.coords.latitude;
    const longitud= e.coords.longitude;
    console.log(longitud)
    const apiHora= await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=7578825f165093eaff55c2e113b3988d`)
    const apiHora2= await apiHora.json();
    console.log(apiHora2)
}*/

    return (
      <div className="form">
       <div>
           <form onSubmit={(e)=>handlerEvent(e)}>
               <input type="text" name="city" onChange={e=>setFind(e.target.value)} placeholder="Ingrese su Ciudad"></input>
              <button onClick={data}>

              </button>
           </form>
       </div>
        <List   city={city} temp={temp} winds={winds} cloud={cloud} clima={clima} /> 
        <div>  
           <h5>
                {hora.toString()}
           </h5>
        </div>
      </div>
    );
  }
  
  export default Form;
  