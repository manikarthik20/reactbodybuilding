import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/account/Account';
import Cart from './components/cart/Cart';
import ClothingAccessories from './components/clothingAccessories/ClothingAccessories';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import JoinBodyFit from './components/joinBodyFit/JoinBodyFit';
import Navbar from './components/navbar/Navbar';
import NewTrending from './components/newTrending/NewTrending';
import Abs from './components/performance/abs/Abs';
import BulkBody from './components/performance/bulkbody/BulkBody';
import Protine from './components/protine/Protine';
import SalesSpecials from './components/salesSpecials/SalesSpecials';
import TopProducts from './components/topProducts/TopProducts';
import VitaminsHealth from './components/vitaminsHealth/VitaminsHealth';
import WeightManagement from './components/weightManagment/WeightManagement';
//import Account from './components/account/Account';

function App() {
  return (
    <div className="App">
      {/* <Account/> */}
      {/* <Footer/> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/joinBodyFit' element={<JoinBodyFit />} />
          <Route path='/newTrending' element={<NewTrending />} />
          <Route path='/abs' element={<Abs />} />
          <Route path='/bulkBody' element={<BulkBody />} />
          <Route path='/weightManagment' element={<WeightManagement />} />
          <Route path='/vitaminsHealth' element={<VitaminsHealth />} />
          <Route path='/topProducts' element={<TopProducts />} />
          <Route path='/salesSpecials' element={<SalesSpecials />} />
          <Route path='/protine' element={<Protine />} />
          <Route path='/clothingAccessoris' element={<ClothingAccessories />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
