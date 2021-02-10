import React from 'react'


const Card = ({object}) => {
    let today ='';
const d = new Date() ;
const day = d.getDay();
const date = d.getDate();
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month =  months[d.getMonth()];
const displayDate = (d) => {

    switch (d){
        case 0 : 
        return today = 'Sunday';
        case 1 : 
        return today = 'Monday';
        case 2 : 
        return today = 'Tuesday';
        case 3 : 
        return today = 'Wednesday';
        case 4 : 
        return today = 'Thursday';
        case 5 :
        return today = 'Friday';
        case 6 : 
        return today = 'Saturday';
        default :
        return today;
    }
    }
 displayDate(day);

    return (
        <>
            <div className='card-details' >
 <h2 className='temperature-max'>{object.main.temp_max}<span>°</span><span>C</span></h2>
 <h2 className='temperature-min'>{object.main.temp_min}<span>°</span><span>C</span></h2>
 <br/>
 
 <div className='city'>
 <h1 className='city-name'>{object.name}</h1>
 <p className='date'> {today} {month} '{date}</p>
 </div>
 <br/>
 
 <div>
     <div  style={{display:'flex' ,  justifyContent:'center' , alignItems : 'center'}}>
    
        <div style={{display:'flex' , flexDirection:'column' , alignItems : 'center'}}>
        <img style={{padding:'0' , width:'50px'}} src={`http://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png`} alt=""/>
        <h2 style={{padding:'0' , fontSize:'1em'}} className='description'>{object.weather[0].description}</h2>
        </div>
    </div>
     
</div>
</div>
        </>
    )
}

export default Card
