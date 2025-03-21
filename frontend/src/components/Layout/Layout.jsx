import React from "react";

import Header from "../Header/Header";  // ✅ Fix Path
import Routers from "../../router/Routers"; // ✅ Fix Path
import Footer from "../Footer/Footer"; // ✅ Fix Path

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
