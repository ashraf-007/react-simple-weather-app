import React , { useContext , useEffect , useState }  from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import './styles/styles.css';
import { WeatherContext } from './Context/WeatherContext';
import sun from './images/sun.jpg';
import rain from './images/rain.jpg';
import cloudy from './images/clouds.jpg';
import snow from './images/snow1.jpg';

function App() {
  const { data } = useContext(WeatherContext);
  let back = '';
    data.forEach((obj)=> back = obj.weather[0].main);
   const [ background , setBackground ] = useState(null);

    useEffect(() => {
      if ( back === 'Clouds' ){
        setBackground(cloudy)
      } if ( back === 'Clear' ){
        setBackground(sun)
      } 
       if ( back === 'Rain' ){
         setBackground(rain)
        } 
        if ( back === 'Snow' ){
         setBackground(snow)
        } 
 
    }, [back])
   const dynamicBackground = {
     backgroundImage : `url( ${background} )`
   }
  
  return (
  <div className='app' style={dynamicBackground} >
     
    <Nav />
    <Body />  
    <br/>
  <div>Made By Achraf Ben Moumou</div>
   </div>
  )
}

export default App;
