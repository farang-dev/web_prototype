import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import './App.css';
import NotificationBar from "./NotificationBar";
import Video from "./video.mp4";

function App() {
  return (
    <div className="App">
    <NotificationBar></NotificationBar>
    <Heading></Heading>
    <Content></Content>
    <video src={Video} autoPlay></video>
    </div>
  )
};  

export default App;