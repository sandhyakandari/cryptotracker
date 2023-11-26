import React from 'react'
import Button from '../../common/button'
import './style.css'
import {motion} from 'framer-motion'; 
import iphone from '../../../assets/img/iphone.png';
import gradient from '../../../assets/img/gradint.png';
import { Link } from 'react-router-dom';
export default function MainComponent() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 className='trackcrypto-heading'
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration:1,delay:0.5}}
            >Track Crypto</motion.h1>
            <h1 className='realtime-heading'>Real Time.</h1>
            <p className='trackparagraph'>Track crypto through a public api in real time. Vist the dashboard to do so!</p>
            <div className='btns'>
           <Link to='/Dashboard'> <Button text={'Dashboard'} 
                       onClick={()=>console.log('btn clicked')}></Button>
                       </Link>
                       <Link>
            <Button text={'Share'} 
                       outlined={true}
                       onClick={()=>console.log('btn clicked')}></Button>
                      </Link> </div>
        </div>
         
        <div className='phone-container'>
            <motion.img
             initial={{y:-30}}
             animate={{y:30}}
             transition={{type:"smooth",
            repeatType:"mirror",
          duration:2,
        repeat:Infinity}}
            src={iphone} className='iphone'>
            </motion.img>
            <img src={gradient} className='gradient'>
            </img>
            
        </div>
    </div>
  )
}
