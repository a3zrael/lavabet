import React, { Component, useState } from "react";

import Promo from "../Promo/Promo.jsx";
import WhatUNeed from "../WhatUNeed/WhatUNeed.jsx";
import Layout from "../../layout/Layout.jsx";
import Earn from "../Earn/Earn.jsx";
import CreateAcc from "../CreateAcc/CreateAcc.jsx";

const App = () => {
  return (
    <Layout>
      <Promo />
      <WhatUNeed />
      <Earn />
      <CreateAcc />
    </Layout>
  );
};

export default App;
