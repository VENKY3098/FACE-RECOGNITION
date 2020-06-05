import React from 'react';
import './imagelink.css'

const imagelink=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className='f3 underline gold'>
                {'ENTER THE LINK OF THE IMAGE TO DETECT THE FACE ON THE IMAGE...'}<br/>
                {'THE ALIEN WILL GIVE YOU THE RESULT'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w70 center br-pill br-light-red' type='tex' onChange={onInputChange}/>
                    <button 
                    className='w30 grow link ph3 pv2 dib shadow-5 white br-pill bg-blue'
                    onClick={onButtonSubmit}
                    >DETECT</button>
                </div>
            </div>
        </div>
    );
}
export default imagelink;