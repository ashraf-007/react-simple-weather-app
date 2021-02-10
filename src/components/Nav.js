import React , { useState , useContext } from 'react';
import Search from './Search';
import { WeatherContext } from '../Context/WeatherContext';
import Modal from '@material-ui/core/Modal';
import close from '../images/close1.svg';


const Nav = () => {
const { getCity } = useContext(WeatherContext);

const [ open , setOpen ] = useState(false)

function getPosition() {
navigator.geolocation.getCurrentPosition((position) => {

getCity(position.coords.latitude, position.coords.longitude)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, function (error) {
if (error.code === error.PERMISSION_DENIED)
handleOpen();
// alert('Please allow geolocation to access this feature')
})
}
const handleOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};
const modalStyle = {
fontSize: '0.8em',
width: '50%',
height: '120px',
background: 'linear-gradient(to right , rgba(255,255,255,0.9),rgba(255,255,255,0.8))',
position: 'absolute',
top: '25%',
left: '25%',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
padding: '10px',
textAlign: 'center',
border: 'none',
outline: 'none',
borderRadius: '10px',
boxShadow: '0px 0px 10px rgba(0 ,0 ,0 , 0.3)'
}

return (

<nav className='navigation'>


  <h1 className='app-header'> Weather App </h1>
  <button className='location-btn' onClick={()=> getPosition()}>Get your local weather</button>
  <Modal open={open} onClose={handleClose}>
    <div style={modalStyle}>
      <div>
        <h3>Please allow geolocation from your browser to access this feature</h3>
      </div>
      <img style={{position:'absolute',top:'10px',right:'10px',width:'15px',cursor:'pointer'}} onClick={handleClose}
        src={close}alt="" />
    </div>
  </Modal>
  <Search />

</nav>

)
}

export default Nav;