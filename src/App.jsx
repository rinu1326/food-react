// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Route
// import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Routes> {/* Use Routes instead of Route */}
//         <Route path='/' element={<Home />} />
//         <Route path='/cart' element={<Cart />} />
//         <Route path='/order' element={<PlaceOrder />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
