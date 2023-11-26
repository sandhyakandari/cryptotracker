import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  return (
    <div>
          <IconButton onClick={()=>setState(true)}>
           <MenuRoundedIcon className='link'></MenuRoundedIcon>
         </IconButton>
          <Drawer
          anchor={'right'}
            open={state}
            onClose={()=>setState(false)}
          >
             <div className='drawerdiv'>
                    <Link href='/'>
                        <p className='link'>Home</p></Link>
                    <Link href='/compare'>
                        <p className='link'>Compare</p>
                    </Link>
                    
                    <Link href='/watchlist'>
                        <p className='link'>Watchlist</p>
                    </Link>
                </div>
          </Drawer>
    </div>
  );
}