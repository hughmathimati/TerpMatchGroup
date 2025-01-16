import * as React from "react";
import { useState, useEffect, useRef } from "react";
import './Home.css';

export default function Home() {
  return (<>
    <h1>Home</h1>

    <h2>Your Profile →</h2>

    <h2>Current Classes →</h2>

    <div className="classList">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>

    <h2>Matches→</h2>

    <div className="matchList">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>


    
  </>);
}