import React from 'react';


import NavbarPart from './components/Navbar/Navbar';
import CarouselPart from './components/Carousel/Carousel';
import PremiumIcons from './components/PremiumIcons/PremiumIcons';
import Products from './components/Products/Products';
import BestSeller from './components/bestsellers/BestSeller';
import News from './components/News/News';
import Daily from './components/Daily/Daily';
import Diaries from './components/Diaries/Diaries';
import Discount from './components/Discount/Discount';
import BackTotop from './components/BackTotop/BackTotop';
import TopHeader from './components/topHeader/TopHeader';
import Sidebar from './components/Sidebar/Sidebar';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <TopHeader />

      <NavbarPart />
      <CarouselPart/>
      <PremiumIcons/>
      <Products/>
      <BestSeller/>
      <News/>
      <Daily/>
      <Diaries/>
      <Discount/>
      <BackTotop/>

      <Sidebar />
    </div>
  );
}

export default App;
