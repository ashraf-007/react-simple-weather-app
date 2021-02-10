import React from 'react';
import Main from './Main';
import SmallCards from './SmallCards';

const Weather = () => {
    return (
        <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
          <Main />
          <SmallCards />  
        </div>
    )
}

export default Weather
