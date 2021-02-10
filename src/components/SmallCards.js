import React , { useContext }from 'react'
import { WeatherContext } from '../Context/WeatherContext';
import SingleCard from './SingleCard';
const SmallCards = () => {
    const { cast } = useContext(WeatherContext);
    
    let fore = [];
       cast.forEach((d)=>{
         for ( let i=5 ; i < d.list.length ; i+=8 ){
          fore.push(d.list[i])
        } 
        })
  
    return (
        <>

    <div style={{display:'flex' , margin:'10px auto', justifyContent:'center', alignItems:'center' , width:"100%",flexWrap:'wrap' }}>
    {fore.map((foreCast , index )=>(
     <SingleCard key={index} cast={foreCast} />
     ))
    }
      
     </div>
           
        </>
    )
}

export default SmallCards

