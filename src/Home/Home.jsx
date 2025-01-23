import * as React from "react";
import { useState, useEffect, useRef } from "react";
import './Home.css';

export default function Home() {
  return (<>
    <div className="page-frame">
    <h1>Home</h1>
    <h2>Your Profile</h2>
    <h2>Current Classes →</h2>
    <div className="classList">  
      <div className="circles">
        {[...Array(7)].map((_, index) => (
          <div className="circleText">
            <div className="circle"></div>
            <span className="label">Class</span>
          </div>
        ))}
      </div>
    </div>

    <h2>Matches→</h2>
    <div className="matchList">
      {[...Array(7)].map((_, index) => (
        <div className="squareText">
          <div className="square"></div>
          <span className="label">Class</span>
        </div>
      ))}
      
    </div>
  </div>
  </>);
}