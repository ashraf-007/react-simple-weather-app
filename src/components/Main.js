import React , { useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext';
import Card from './Card';

 
const Main = () => {

const  { data } = useContext(WeatherContext);

    return (
        <>
        <div className='card'>
            { data.map((object,index)=>(
            <Card key={index} object={object} />
            ))}
           
        </div>
        
        </>
    )
        
}

export default Main

