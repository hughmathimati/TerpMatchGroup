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

  const groups = Array.from({ length: 21 }).map((_, index) => ({
    id: index + 1,
    image: ``,
    title: `Group ${index + 1}`,
    description: `This is study group ${index + 1}`,
  }));

  return (
    <div className="content">
      <div className="header">Browse Groups</div>
      <div className="labels-row">
        {Array.from({ length: 14 }).map((_, index) => (
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
        {/* {Array.from({ length: 21 }).map((_, index) => (
          <div key={index} className="container">
            <div className="item"></div>
            <div className="title">Title</div>
            <div className="description">Body</div>
          </div>
        ))} */}
      {groups.map((group) => (
        <div key={group.id} className="container">
          <img src={group.image} alt={group.title} className="item" />
          <div className="title">{group.title}</div>
          <div className="description">{group.description}</div>
        </div>
      ))}
      </div>
    </div>
  );
}
