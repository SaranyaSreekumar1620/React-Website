import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../footerHome/Footer";
import Del_Menu from "../Delicious_Menu/Del_Menu";

const Menu = () => {
  return (
    <div className="menupage">
      <Navbar />
      <Del_Menu />
      <Footer />
    </div>
  );
};

export default Menu;
