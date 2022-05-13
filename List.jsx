import React from "react";
import styles from "./List.module.css";
import Datetime from "./Datetime";
import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{ faCloud, faCloudMoonRain, faCloudRain, faMoon, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
const List= ({city, temp, winds,clima})=> {
var showdate= new Date();
var s=showdate.getHours();

var condicion;
    if(city){
        if(clima[0].description==="few clouds"){
         condicion=<FontAwesomeIcon className={styles.icono} icon={faCloud}/>
        }else if(clima[0].description===("broken clouds" || "scattered clouds") && s<19){
         condicion=<FontAwesomeIcon className={styles.icono} icon={faCloudRain}/>
        }else if(clima[0].description===("broken clouds" || "scattered clouds") && s>19) {
         condicion=<FontAwesomeIcon className={styles.icono} icon={faCloudMoonRain}/>
        }
         if(clima[0].description==="clear sky" && ( s>4&& s<=19) ){
            condicion=<FontAwesomeIcon className={styles.icono} icon={faSun}/>
           }else if(clima[0].description==="clear sky" && ( s<4 ||s>=19)){
            condicion=<FontAwesomeIcon className={styles.icono} icon={faMoon}/>
           }
    }
    return (
    <div className={styles.container}>
        <div className={styles.hijo}>
            <div className={styles.first}>
                <h1>{city.name}</h1>
                <Datetime />
            </div>

            <div className={styles.second}>
                <h1> {condicion}</h1>
                <h1>{temp.temp}º</h1>  
            </div>

            <div className={styles.third}>
                <div>
                    <h3>Feels like: {temp.feels_like}º</h3>
                    <h6>Min: {temp.temp_min}º</h6>
                    <h6>Max: {temp.temp_max}º</h6>
                </div>
              <div className={styles.four}>
                <FontAwesomeIcon className={styles.icono} icon={faWind}/> 
                  { winds.speed} m/s
              </div>
            </div> 

            <div className={styles.five}>
                 <h5>Humidity: {temp.humidity}% </h5>
            </div>
        </div>     
    </div>
    )

   



}
  export default List;
  