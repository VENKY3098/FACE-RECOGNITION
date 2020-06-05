import React from 'react';
import Tilt from 'react-tilt'
import './logo.css';
import logo1 from './data.png';

const logo=()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br-3 shadow' options={{ max : 60 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img src={logo1} alt=''/>
                </div>
            </Tilt>
        </div>
    );
}
export default logo;