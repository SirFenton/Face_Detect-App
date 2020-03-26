import React from 'react'


function Navigation ( {onRouteChange , isSignedIn} ) {
        if(isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={()=> onRouteChange('signout')} 
                        className='f3 link dim black underline pa3 pointer light-yellow'>Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={()=> onRouteChange('signin')} 
                        className='f3 link dim black underline pa3 pointer light-yellow'>Sign In</p>
                    <p onClick={()=> onRouteChange('register')} 
                        className='f3 link dim black underline pa3 pointer light-yellow'>Register</p>
                </nav> 
            );
        }
}

export default Navigation