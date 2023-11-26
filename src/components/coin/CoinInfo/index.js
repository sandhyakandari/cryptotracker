import React, { useState } from 'react'

function CoinInfo({heading,desc}) {
  const shortDesc=desc.slice(0,200)+"<span style='color:va(--grey)'>Read More...</span>";
  const longDesc=desc+
  "<span style='color:var(--grey)'>Read Less...</span>";
  const[flag,setFlag]=useState(false);
  return (
    <div className='grey-wrapper'>
    <h2 className='coin-info-heading'>{heading}</h2>
    {desc.length>200?
   (<p className='coin-info-desc'
   onClick={()=>setFlag(!flag)}
   dangerouslySetInnerHTML={{__html:!flag?shortDesc:longDesc}}>
    
  </p>):   
  (
    <p dangerouslySetInnerHTML={{__html:desc}}>   
    </p>
  )}      
    </div>
  )
}

export default CoinInfo
