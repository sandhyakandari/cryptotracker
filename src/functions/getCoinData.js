import axios from "axios";
export const getCoinData=(coinid)=>{
   const mydata= axios.get(`https://api.coingecko.com/api/v3/coins/${coinid}`)
          .then((res)=>{ return res.data;
        }).catch((err)=>{
          console.log(err);
        })
        return mydata; 
}