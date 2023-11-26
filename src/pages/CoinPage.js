import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header/index'
import Loader from '../components/common/Loader';
import axios from 'axios';
import { coinObject } from '../functions/converObj';
import List from '../components/dashboard/list';
import CoinInfo from '../components/coin/CoinInfo';
import { useEffect } from "react";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrice } from "../functions/getCoinPrice";
import { CookieSharp } from "@mui/icons-material";
import LineChart from "../components/coin/LineChart";
import { convertData } from "../functions/converDate";
import SelectDays from "../components/coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceToggle from "../components/coin/PriceType";
 function CoinPage() {
    const {coinid}=useParams();
    const[days,setDays]=useState(30);
    const [isLoading,setIsLoading]=useState(true);
    const [coinData,setCoinData]=useState([]);
    const[chartData,setChartData]=useState({});
    const[priceType,setPriceType]=useState('prices')
    console.log(coinid);  
    console.log("coin data from coin.js",coinData); 
   useEffect(()=>{
    if(coinid){
      getData();
    }
   },[coinid]);
   async function getData(){
    const data= await getCoinData(coinid);
   if(data){
    coinObject(setCoinData,data)
    const prices=await getCoinPrice(coinid,days,priceType);
    if(prices.length>0){
    settingChartData(setChartData,prices);
    setIsLoading(false)
    }   
  }

   }
   const handlePriceTypeChange=async (event,newType)=>{
    setIsLoading(true);  
    setPriceType(newType);
      const prices=await getCoinPrice(coinid,days,newType);
      if(prices.length>0){
     settingChartData(setChartData,prices) 
     
      setIsLoading(false)
      }
   }
    const handleDaysChange=async (event)=>{
      setIsLoading(true);
      setDays(event.target.value)
      const prices=await getCoinPrice(coinid,event.target.value,priceType);
      if(prices.length>0){
     settingChartData(setChartData,prices) 
     
      setIsLoading(false)
      }   
   

;    }
  return (
    <div>
        <Header></Header>
        {isLoading? <Loader></Loader>:<>
        <div className='grey-wrapper'>
        <List coin={coinData}></List></div>
        
        <div className="grey-wrapper">
        <SelectDays days={days} handleDaysChange={handleDaysChange}></SelectDays>
          <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}></PriceToggle>
          <LineChart chartData={chartData} priceType={priceType}></LineChart>
        </div>
        <CoinInfo heading={coinData.name} 
        desc={coinData.desc}></CoinInfo>
        
        </>}
 
    </div>
    )
}
export default CoinPage;