import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';
import NotificationBar from "./NotificationBar";

function App() {
  return (
    <div className="App">
    <NotificationBar></NotificationBar>
    <Heading></Heading>
    <Content></Content>
    <Footer></Footer>
    </div>
  )
};  

export default App;