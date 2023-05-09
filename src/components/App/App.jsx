import React, { Component } from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Promo from "../Promo/Promo.jsx";
// import Layout from '../../layout/Layout';
import WhatUNeed from "../WhatUNeed/WhatUNeed.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Promo />
      <WhatUNeed />≥
      <Footer />
    </div>
  );
};

export default App;
