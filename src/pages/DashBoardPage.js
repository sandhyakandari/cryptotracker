import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import TabsComponent from '../components/dashboard/Tabs'
import axios from 'axios';
import Search from '../components/dashboard/search';
import PaginationComponent from '../components/dashboard/pagination';
import Loader from '../components/common/Loader';
import BackToTop from '../components/common/BacktoTOp';
import { get100Coins } from '../functions/get100Coins';

function DashBoardPage() {
  const[coins,setCoins]=useState([]);
 const[search,setSearch]=useState('');
 const [page,setPage]=useState(1);
 const[isLoading,setIsLoading]=useState(true);
const[paginatedCoin,setPageinatedCoin]=useState([]);
 const onsearhChange=(e)=>{
  setSearch(e.target.value);
 }
 const handlePageChange=(e,value)=>{
  setPage(value);
  var previousIndex=(value-1)*10;
  setPageinatedCoin(coins.slice(previousIndex,previousIndex+10))
  setIsLoading(false);
 }
 var filteredCoins=coins.filter(
  (item)=>
 item.name.toLowerCase().includes(search.toLowerCase()) ||
 item.symbol.toLowerCase().includes(search.toLowerCase()) );
  useEffect(()=>{
    getData();
  },[])
   const getData=async ()=>{
    const myCoins=await get100Coins();
   if(myCoins){
    setCoins(myCoins);
    setPageinatedCoin(myCoins.slice(0,10))
    setIsLoading(false);
   }
  }
  
    return (
    <>
    <Header></Header>
    <BackToTop></BackToTop>
    { isLoading ? ( <Loader />):(<div>
      <Search search={search} onsearhChange={onsearhChange}></Search>
      <TabsComponent coins={search?filteredCoins:paginatedCoin}></TabsComponent>
      {!search && 
      <PaginationComponent page={page} 
      handlePageChange={handlePageChange}/>
   } 
        </div> ) }
 </> )
}

export default DashBoardPage;
