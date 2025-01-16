import * as React from "react";
import { useState, useEffect, useRef } from "react";
import './Home.css';

export default function Home() {
  return (
    <div className="profile-page">
      <header>
        <h1>Home</h1>
      </header>
      <section className="current-courses">
        <label>Current Courses</label>
        <div className="circles">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="circle"></div>
          ))}
        </div>
        <div className="labels">
          {[...Array(7)].map((_, index) => (
            <label key={index}>Label</label>
          ))}
        </div>
      </section>
      <section className="blank-section">
        <h2>Blank</h2>
        <div className="squares">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="square"></div>
          ))}
        </div>
      </section>
    </div>
  );
}