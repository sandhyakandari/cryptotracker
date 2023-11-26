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
                    <a href='/'>
                        <p className='link'>Home</p></a>
                    <a href='/compare'>
                        <p className='link'>Compare</p>
                    </a>
                    
                    <a href='/watchlist'>
                        <p className='link'>Watchlist</p>
                    </a>
                    <a href='/Dashboard'>
                       <Button text={'Dashboard'} 
                       outlined={true}
                       onClick={()=>console.log('btn clicked')}></Button>
                       </a>
                </div>
                <div className='mobileDrawer'> 
                 <TemporaryDrawer></TemporaryDrawer>
                </div>
            </nav>
    )
}
export default Header;