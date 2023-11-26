import React from 'react';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainComponent from './components/landingpage/mainComponent';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import DashBoardPage from './pages/DashBoardPage';
import CoinPage from './pages/CoinPage';
import WatchlistPage from './pages/watchlist';
import ComparePage from './pages/ComparePage';
function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
       <Routes>
        <Route path='/'element={<HomePage />}></Route>
        <Route path='/cryptotracker' element={<HomePage />} />  
    <Route
        path='/Dashboard' element={<DashBoardPage></DashBoardPage>}
       >
       </Route>
       <Route
        path='/coin/:coinid' element={<CoinPage />}
       >
       </Route>
       <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
       </Routes>
       </BrowserRouter>
     </div> )
}

export default App;
