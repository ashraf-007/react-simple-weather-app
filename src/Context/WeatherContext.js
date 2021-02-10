import React , { useState ,  createContext }from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
 export const WeatherContext = createContext();

 export const WeatherProvider = ({ children }) => {
     
 const [ city , setCity ] = useState([]);
 const [ cast , setCast ] = useState([]);
const [ isLoading , setIsLoading ] = useState(true);
   

const getData = async (cityName) => {

     const  CONNECTION_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY} `
    try {
const { data }  = await axios.get(CONNECTION_URL)

setCity(()=>{
    return [data ]
});
setIsLoading(false);
console.log( 'data ' , data )

    } catch (error) {
        console.log('Getting Data from API : ' , error)
    }
}
 const getCity = async (lat , lon ) => {
  try {  
      
   const  CONNECTION_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`

      const { data } = await axios.get(CONNECTION_URL)
      console.log('cityName ' , data.name );
      setCity(()=> {
          return [ data ]
      })
setIsLoading(false);
      
  } catch (error) {
      console.log('Getting City error ' , error.message)
  }   
 }
 
const getForecast = async (cityName) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`)
         setCast(()=>{
             return [ data ]
         });
    } catch (error) {
        console.log('Error in Getting 5 days forecast by city name : ' , error )
    }
}
const getCast = async (lat , lon ) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
         setCast(()=>{
             return [ data ]
         });

    } catch (error) {
        console.log('Error in Getting 5 days forecast by long and lat : ' , error)
        
    }
}

return(
    <WeatherContext.Provider value={ 
       {
           data : city ,
           getData,
           isLoading,
           setIsLoading,
           getCity,
           getForecast,
           cast,
           getCast
       } 

          }>
    {children}
    </WeatherContext.Provider>
)
}
