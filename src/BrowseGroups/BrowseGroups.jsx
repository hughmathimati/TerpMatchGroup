import React from "react";
import { useState, useEffect, useRef } from "react";
import Select from 'react-select';
import './BrowseGroups.css';

export default function BrowseGroups() {
  // const [activeLabels, setActiveLabels] = useState([]);

  // const handleLabelClick = (index) => {
  //   setActiveLabels((prev) => {
  //     const newActiveLabels = [...prev];
  //     if (newActiveLabels.includes(index)) {
  //       newActiveLabels.splice(newActiveLabels.indexOf(index), 1);
  //     } else {
  //       newActiveLabels.push(index);
  //     }
  //     return newActiveLabels;
  //   });
  // };

  const groups = Array.from({ length: 21 }).map((_, index) => ({
    id: index + 1,
    image: ``,
    title: `Group ${index + 1}`,
    description: `This is study group ${index + 1}`,
  }));

  const majors = [
    { value: 'any', label: 'Any' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Biology', label: 'Biology' },
    { value: 'English', label: 'English' },
    { value: 'History', label: 'History' }
  ];

  const hobbies = [
    { value: 'any', label: 'Any' },
    { value: 'Reading', label: 'Reading' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Cooking', label: 'Cooking' },
    { value: 'Gym', label: 'Gym' },
    { value: 'Dance', label: 'Dance' }
  ];

  const classes = [
    { value: 'any', label: 'Any' },
    { value: 'CMSC131', label: 'CMSC131' },
    { value: 'CMSC132', label: 'CMSC132' },
    { value: 'MATH140', label: 'MATH140' },
    { value: 'Math141', label: 'Math141' },
    { value: 'COMM107', label: 'COMM107' },
    { value: 'ENES100', label: 'ENES100' }
  ];

  const sizes = [
    { value: 'any', label: 'Any' },
    { value: '2', label: '2' },
    { value: '3-5', label: '3-5' },
    { value: '6-9', label: '6-9' },
    { value: '10-12', label: '10-12' },
    { value: '13-15', label: '13-15' },
    { value: '15+', label: '15+' }
  ];

  const times = [
    { value: 'any', label: 'Any' },
    { value: '<6am', label: '<6am' },
    { value: '6am-9am', label: '6am-9am' },
    { value: '9am-12pm', label: '9am-12pm' },
    { value: '12pm-3pm', label: '12pm-3pm' },
    { value: '3pm-6pm', label: '3pm-6pm' },
    { value: '6pm-9pm', label: '6pm-9pm' },
    { value: '9pm-12am', label: '9pm-12am' },
    { value: '12am<', label: '12am<' }
  ];

  return (
    <div className="content">
      <div className="header">Browse Groups</div>
      <div className="labels-row">
        <Select
          className="label-dropdown"
          options={majors}
          placeholder="Major/Minor"
        />
        <Select
          className="label-dropdown"
          options={hobbies}
          placeholder="Hobbies/Interests"
        />
        <Select
          className="label-dropdown"
          options={classes}
          placeholder="Courses"
        />
        <Select
          className="label-dropdown"
          options={sizes}
          placeholder="Preferred Group Size"
        />
        <Select
          className="label-dropdown"
          options={times}
          placeholder="Preferred Study Time"
        />
      </div>
      {/* <div className="labels-row">
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
      </div> */}
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
