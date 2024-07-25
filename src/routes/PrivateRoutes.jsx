import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Header } from '../header.jsx';
import { Card } from "../Card.jsx";
import { Dynamig } from "../DynamicPage.jsx";
import SearchPage from "../searchPage.jsx";
import Karzinka from "../karzinka.jsx";
import Like from "../like.jsx";
import Kirish from "../Kirish.jsx";
import Footer from "../Footer.jsx";
import Register from '../auth/Register.jsx';
import Login from '../auth/Login.jsx';
import Phones from '../catigories/phones.jsx';
import HeaderBottom from '../headerBottom.jsx';


const PrivateRoutes = () => {
  return (
    <div className=" max-w-[1400px] m-auto">
    <Header />
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/Home" element={<Card />} />
      {/* <Route path="/Kirish" element={<Card />} /> */}
      <Route path="/Card/:id" element={<Dynamig />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/karzinka" element={<Karzinka />} />
      <Route path="/like" element={<Like />} />
      <Route path="/kirish" element={<Login />} />
      <Route path="/register" element={<Card/>}/>
    </Routes>
    <Footer />
    <HeaderBottom/>
  </div>
  )
}

export default PrivateRoutes