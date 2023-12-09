import React from "react";
import './App.css';
import HeaderPage from "./components/Header";
import Pricing from "./components/Pricing";
import Option from "./components/Option";
import Footer from "./components/Footer";
const App=()=>{
  return (
    <>
      <HeaderPage/>
      <Pricing/>
      <Option/>
      <Footer/>
    </>
  );
}
export default App;