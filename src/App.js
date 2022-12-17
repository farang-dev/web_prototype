import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import './App.css';
import NotificationBar from "./NotificationBar";

function App() {
  return (
    <div className="App">
    <NotificationBar></NotificationBar>
    <Heading></Heading>
    <Content></Content>
    </div>
  )
};  

export default App;