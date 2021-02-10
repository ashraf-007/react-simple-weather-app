import React , { useState , useContext , useEffect } from 'react'
import { WeatherContext } from '../Context/WeatherContext';
import searchIcon from '../images/search.svg' 
 

const Search = () => {
    const [ text , setText ] = useState('');
 const  {  getData , getCity ,getForecast , getCast  } = useContext(WeatherContext);

const handleSubmit = (e)=> {
    e.preventDefault();
    if (!text) return alert('Enter a City Name  ');
    getData(text);
    getForecast(text)
    setText('');
 console.log('city name : ' ,text)

}
function getPosition(){
    
       navigator.geolocation.getCurrentPosition((position)=>{

           getCity(position.coords.latitude , position.coords.longitude)
           getCast(position.coords.latitude , position.coords.longitude )
           },function(error) {
               if (error.code === error.PERMISSION_DENIED)
                 getCity(51.509865,-0.118092);  
                 getCast(51.509865 , -0.118092 )
                 
             }); 
    }
       

    useEffect(() => {
       getPosition();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                <img onClick={(e)=> handleSubmit(e)} className='search-icon' src={searchIcon} alt=""/>
                <input className='search' onChange={(e)=>setText(e.target.value)} value={text} placeholder='Another Location...' type="text"/> 
                </div>
            </form>
        </>
    )
}

export default Search;
