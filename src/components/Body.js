import React , { useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext';
import Weather from './Weather';
 
import { CircularProgress } from '@material-ui/core';
const Body = () => {
const  { isLoading } = useContext(WeatherContext);

    return (
        <>
            <div className='app-body'>
                { isLoading ? <div style={{padding:'20%'}}>
                    <CircularProgress />
                </div> :
                <Weather /> }
            </div>
        </>
    )
}

export default Body
