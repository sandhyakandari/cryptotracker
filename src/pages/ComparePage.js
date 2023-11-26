import React, { useEffect, useState } from "react";
import CoinInfo from "../components/coin/CoinInfo/index";
import LineChart from "../components/coin/LineChart/index";
import PriceToggle from "../components/coin/PriceType/index";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader/index";
import SelectCoin from "../components/Compare/SelectCoins/index";
import { coinObject } from "../functions/converObj";
import { get100Coins } from "../functions/get100Coins";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrice } from "../functions/getCoinPrice";
import { settingChartData } from "../functions/settingChartData";
import List from "../components/dashboard/list";

function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [coin1, setCoin1] = useState(allCoins[0]?.id ?? "bitcoin");
  const [coin2, setCoin2] = useState(allCoins[1]?.id ?? "ethereum");
  const [days, setDays] = useState(120);
  const [coin1Data, setCoin1Data] = useState();
  const [coin2Data, setCoin2Data] = useState();
  const [loading, setLoading] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
console.log(coin1,coin2);
  const handlePriceTypeChange = async (e) => {
    setLoading(true);
    setPriceType(e.target.value);
    const prices1 = await getCoinPrice(coin1, days, e.target.value);
    const prices2 = await getCoinPrice(coin2, days, e.target.value);
    settingChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoading(false);
  };

  const handleCoinChange = async (e, isCoin1) => {
    setLoading(true);
    if (isCoin1) {
      setCoin1(e.target.value);
      const data1 = await getCoinData(e.target.value);
      coinObject(setCoin1Data, data1);
      const prices1 = await getCoinPrice(e.target.value, days, priceType);
      const prices2 = await getCoinPrice(coin2, days, priceType);
      settingChartData(setChartData, prices1, data1, coin2Data, prices2);
    } else {
      setCoin2(e.target.value);
      const data2 = await getCoinData(e.target.value);
      coinObject(setCoin2Data, data2);
      const prices1 = await getCoinPrice(coin1, days, priceType);
      const prices2 = await getCoinPrice(e.target.value, days, priceType);
      settingChartData(setChartData, prices1, coin1Data, data2, prices2);
    }
    setLoading(false);
  };

  const handleDaysChange = async (e) => {
    setLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrice(coin1, e.target.value, priceType);
    const prices2 = await getCoinPrice(coin2, e.target.value, priceType);
    settingChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();
    if (data) {
      console.log(data);
      setAllCoins(data);
    }
    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);
    coinObject(setCoin1Data, data1);
    coinObject(setCoin2Data, data2);
   console.log(coin1,days);
    const prices1 = await getCoinPrice(coin1, days);
    const prices2 = await getCoinPrice(coin2, days);
    console.log(prices1,prices2);
    settingChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
     setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coin1Data?.id || !coin2Data?.id ? (
        <Loader />
      ) : (
        <>
          <SelectCoin
            allCoins={allCoins}
            coin1={coin1}
            coin2={coin2}
            days={days}
            handleCoinChange={handleCoinChange}
            handleDaysChange={handleDaysChange}
          />
          <div className="grey-wrapper">
            <List coin={coin1Data} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <List coin={coin2Data} delay={0.2} />
          </div>
          <div className="grey-wrapper">
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart
              chartData={chartData}
              multiAxis={true}
              priceType={priceType}
            />
          </div>
          <CoinInfo name={coin1Data.name} desc={coin1Data.desc} />
          <CoinInfo name={coin2Data.name} desc={coin2Data.desc} />
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default ComparePage;