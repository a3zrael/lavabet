import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <Header />
      {children}
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;
