import React from 'react'
// import sun from '../images/sun2.png';
// import snow from '../images/neow.png';


// import rain from '../images/showerRain.png'
const SingleCard = ({ cast }) => {
  
//     let newIcon = "";
// function switchIcon(icon){

//     switch (icon) {
//         case '01d' || '01n': 
//             return newIcon = sun ;
//         case '01n': 
//             return newIcon = sun ;
//         case '13d':
//             return newIcon = snow;
//         case '13n':
//             return newIcon = snow ;
//         case '10n':
//             return newIcon = rain;
//          case '10d':
//             return newIcon = rain
    
//         default:
//             return newIcon;
//     }
// }
// switchIcon(cast.weather[0].icon)
// console.log( 'cast Icon : ' , cast.weather[0].icon)
    return (
        <>
   
       <div className='card' style={{ textAlign:'center', cursor:'pointer' , display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center',width:'200px' , margin:' 10px 10px'}}>
       <h1 style={{fontSize:'1.6em', fontWeight:'400'}} >{cast.main.temp_max}<span>°</span><span>C</span></h1>
       <h3 style={{fontSize:'1.2em', fontWeight:'400'}}>{cast.weather[0].description}</h3>
       <h4 style={{fontSize:'1em', fontWeight:'500'}}>
           { cast.dt_txt.split(' ')[0]}
       </h4>
       <img style={{padding:'0', width:'50px'}} src={`http://openweathermap.org/img/wn/${cast.weather[0].icon}@2x.png`} alt=""/>
       </div>  
  
        </>
    )
}

export default SingleCard
