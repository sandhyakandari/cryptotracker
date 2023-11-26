import { Link } from 'react-router-dom';
import Button from '../button';
import TemporaryDrawer from './drawer';
import './style.css';
import React from "react";
function Header(){
    return (
            <nav>
                <h1 className='logo'>
                    CryptoTracker<span style={{color:'var(--blue)'}}>.</span>
                </h1>
                <div className='links'>
                    <Link to='/'>
                        <p className='link'>Home</p></Link>
                    <Link to='/compare'>
                        <p className='link'>Compare</p>
                    </Link>
                    
                    <Link to='/watchlist'>
                        <p className='link'>Watchlist</p>
                    </Link>
                    <Link to='/Dashboard'>
                       <Button text={'Dashboard'} 
                       outlined={true}
                       onClick={()=>console.log('btn clicked')}></Button>
                       </Link>
                </div>
                <div className='mobileDrawer'> 
                 <TemporaryDrawer></TemporaryDrawer>
                </div>
            </nav>
    )
}
export default Header;