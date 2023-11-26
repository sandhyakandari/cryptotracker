import axios from "axios";
export const getCoinPrice=(coinid,days,priceType)=>{
  console.log(days,coinid)  
  const price=
    axios.get(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response) => {
      if (priceType == "market_caps") {
        return response.data.market_caps;
      } else if (priceType == "total_volumes") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (price) {
    return price;
  } else {
    return;
  }
};