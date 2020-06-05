import React from 'react';
const navigation=({onRouteChange,isSignedIn}) =>{
        if(isSignedIn){
        return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signout')} className='f5 gold link dim black underline pointer dib br-pill grow shadow-5 pa2 bg-near-black '>SIGN OUT</p>
        </nav>
        )
        }
        else{
            return(
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                    <p onClick={()=>onRouteChange('signup')} className='f5 gold link dim black underline pointer dib br-pill grow shadow-5 pa2 bg-near-black '>SIGN UP</p>
                    <p onClick={()=>onRouteChange('signin')} className='f5 gold link dim black underline pointer dib br-pill grow shadow-5 pa2 bg-near-black '>SIGN IN</p>
                </nav>
            )
        }
}
export default navigation;