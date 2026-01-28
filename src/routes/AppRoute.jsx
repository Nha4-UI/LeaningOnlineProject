/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Info from "../pages/Info";
import Notfound from "../pages/Notfound";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </>
  );
};

export default AppRoute;
