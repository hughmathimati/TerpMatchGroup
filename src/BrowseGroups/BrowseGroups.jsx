/*import * as React from "react";*/
import React from "react";
import { useState, useEffect, useRef } from "react";
import './BrowseGroups.css';

export default function BrowseGroups() {

  const [activeLabels, setActiveLabels] = useState([]);

  const handleLabelClick = (index) => {
    setActiveLabels((prev) => {
      const newActiveLabels = [...prev];
      if (newActiveLabels.includes(index)) {
        newActiveLabels.splice(newActiveLabels.indexOf(index), 1);
      } else {
        newActiveLabels.push(index);
      }
      return newActiveLabels;
    });
  };

  return (
    <div className="content">
      <div className="header">Browse Groups</div>
      <div className="labels-row">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`label ${activeLabels.includes(index) ? 'active' : ''}`}
            onClick={() => handleLabelClick(index)}
          >
            <span className="icon">★</span>
            Label {index + 1}
          </div>
        ))}
      </div>
      <div className="grid">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="container">
            <div className="item"></div>
            <div className="title">Title</div>
            <div className="description">Body</div>
          </div>
        ))}
      </div>
    </div>
  );
}
