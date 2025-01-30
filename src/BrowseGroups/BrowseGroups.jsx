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

  const [selectedMajors, setSelectedMajors] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  // const groups = Array.from({ length: 21 }).map((_, index) => ({
  //   id: index + 1,
  //   image: ``,
  //   title: `Group ${index + 1}`,
  //   description: `This is study group ${index + 1}`,
  //   labels: {
  //     major: index % 2 === 0 ? 'Computer Science' : 'Mathematics',
  //     hobby: index % 3 === 0 ? 'Reading' : 'Gaming',
  //     class: index % 4 === 0 ? 'CMSC131' : 'CMSC132',
  //     size: index % 5 === 0 ? '3-5' : '6-9',
  //     time: index % 6 === 0 ? '6am-9am' : '9am-12pm'
  //   }
  // }));
  
  const groups = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'CS Warriors',
      description: "We're in Elias Gonzalez's CMSC 132 class, with experience ranging from beginner to experienced.",
      labels: {
        major: 'Computer Science',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '6pm-9pm'
      }
    },
    {
      id: 2,
      image: 'path/to/image2.jpg',
      title: 'MATH 140 Study Group',
      description: 'For all sufferers of MATH 140.',
      labels: {
        major: '',
        hobby: '',
        class: 'MATH140',
        size: '3-5',
        time: '9am-12pm'
      }
    },
    {
      id: 3,
      image: 'path/to/image3.jpg',
      title: 'Public Speakers',
      description: "Open to all Public Speaking students! A safe space to practice your speeches :)",
      labels: {
        major: '',
        hobby: '',
        class: 'COMM107',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 4,
      image: 'path/to/image4.jpg',
      title: 'MATH 141',
      description: 'Study calc ii problems with us and make friends :D',
      labels: {
        major: '',
        hobby: '',
        class: 'MATH141',
        size: '',
        time: ''
      }
    },
    {
      id: 5,
      image: 'path/to/image5.jpg',
      title: 'Buff CSMC 131',
      description: "For CMSC 131-ers who want some gym pals",
      labels: {
        major: '',
        hobby: 'Gym',
        class: 'CMSC131',
        size: '6-9',
        time: ''
      }
    },
    {
      id: 6,
      image: 'path/to/image6.jpg',
      title: "Future Physicists",
      description: 'Discuss physics problems and network with other Physics students.',
      labels: {
        major: 'Physics',
        hobby: '',
        class: '',
        size: '',
        time: '12pm-3pm'
      }
    },
    {
      id: 7,
      image: 'path/to/image2.jpg',
      title: 'Group 7',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 8,
      image: 'path/to/image2.jpg',
      title: 'Group 8',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 9,
      image: 'path/to/image2.jpg',
      title: 'Group 9',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 10,
      image: 'path/to/image2.jpg',
      title: 'Group 10',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 11,
      image: 'path/to/image2.jpg',
      title: 'Group 11',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 12,
      image: 'path/to/image2.jpg',
      title: 'Group 12',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 13,
      image: 'path/to/image2.jpg',
      title: 'Group 13',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 14,
      image: 'path/to/image2.jpg',
      title: 'Group 14',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 15,
      image: 'path/to/image2.jpg',
      title: 'Group 15',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 16,
      image: 'path/to/image2.jpg',
      title: 'Group 16',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 17,
      image: 'path/to/image2.jpg',
      title: 'Group 17',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 18,
      image: 'path/to/image2.jpg',
      title: 'Group 18',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 19,
      image: 'path/to/image2.jpg',
      title: 'Group 19',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 20,
      image: 'path/to/image2.jpg',
      title: 'Group 20',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 21,
      image: 'path/to/image2.jpg',
      title: 'Group 21',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 22,
      image: 'path/to/image2.jpg',
      title: 'Group 22',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 23,
      image: 'path/to/image2.jpg',
      title: 'Group 23',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 24,
      image: 'path/to/image2.jpg',
      title: 'Group 24',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 25,
      image: 'path/to/image2.jpg',
      title: 'Group 25',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 26,
      image: 'path/to/image2.jpg',
      title: 'Group 26',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 27,
      image: 'path/to/image2.jpg',
      title: 'Group 27',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 28,
      image: 'path/to/image2.jpg',
      title: 'Group 28',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 29,
      image: 'path/to/image2.jpg',
      title: 'Group 29',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 30,
      image: 'path/to/image2.jpg',
      title: 'Group 30',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
    {
      id: 31,
      image: 'path/to/image31.jpg',
      title: 'Group 31',
      description: 'This is study group 2',
      labels: {
        major: 'Mathematics',
        hobby: 'Gaming',
        class: 'CMSC132',
        size: '6-9',
        time: '9am-12pm'
      }
    },
  ];
  

  const majors = [
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Biology', label: 'Biology' },
    { value: 'English', label: 'English' },
    { value: 'History', label: 'History' }
  ];

  const hobbies = [
    { value: 'Reading', label: 'Reading' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Cooking', label: 'Cooking' },
    { value: 'Gym', label: 'Gym' },
    { value: 'Dance', label: 'Dance' }
  ];

  const classes = [
    { value: 'CMSC131', label: 'CMSC131' },
    { value: 'CMSC132', label: 'CMSC132' },
    { value: 'MATH140', label: 'MATH140' },
    { value: 'MATH141', label: 'MATH141' },
    { value: 'COMM107', label: 'COMM107' },
    { value: 'ENES100', label: 'ENES100' }
  ];

  const sizes = [
    { value: '2', label: '2' },
    { value: '3-5', label: '3-5' },
    { value: '6-9', label: '6-9' },
    { value: '10-12', label: '10-12' },
    { value: '13-15', label: '13-15' },
    { value: '15+', label: '15+' }
  ];

  const times = [
    { value: '<6am', label: '<6am' },
    { value: '6am-9am', label: '6am-9am' },
    { value: '9am-12pm', label: '9am-12pm' },
    { value: '12pm-3pm', label: '12pm-3pm' },
    { value: '3pm-6pm', label: '3pm-6pm' },
    { value: '6pm-9pm', label: '6pm-9pm' },
    { value: '9pm-12am', label: '9pm-12am' },
    { value: '12am<', label: '12am<' }
  ];

  const handleFilterChange = (selectedOptions, setSelectedOptions) => {
    setSelectedOptions(selectedOptions.map(option => option.value));
  };

  const filteredGroups = groups.filter(group => {
    const majorMatch = selectedMajors.length === 0 || selectedMajors.includes('any') || selectedMajors.includes(group.labels.major);
    const hobbyMatch = selectedHobbies.length === 0 || selectedHobbies.includes('any') || selectedHobbies.includes(group.labels.hobby);
    const classMatch = selectedClasses.length === 0 || selectedClasses.includes('any') || selectedClasses.includes(group.labels.class);
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes('any') || selectedSizes.includes(group.labels.size);
    const timeMatch = selectedTimes.length === 0 || selectedTimes.includes('any') || selectedTimes.includes(group.labels.time);

    return majorMatch && hobbyMatch && classMatch && sizeMatch && timeMatch;
  });

  return (
    <div className="content">
      <div className="header">Browse Groups</div>
      <div className="labels-row">
        <Select
          className="label-dropdown"
          isMulti
          options={majors}
          placeholder="Major/Minor"
          onChange={(selectedOptions) => handleFilterChange(selectedOptions, setSelectedMajors)}
        />
        <Select
          className="label-dropdown"
          isMulti
          options={hobbies}
          placeholder="Hobbies/Interests"
          onChange={(selectedOptions) => handleFilterChange(selectedOptions, setSelectedHobbies)}
        />
        <Select
          className="label-dropdown"
          isMulti
          options={classes}
          placeholder="Courses"
          onChange={(selectedOptions) => handleFilterChange(selectedOptions, setSelectedClasses)}
        />
        <Select
          className="label-dropdown"
          isMulti
          options={sizes}
          placeholder="Preferred Group Size"
          onChange={(selectedOptions) => handleFilterChange(selectedOptions, setSelectedSizes)}
        />
        <Select
          className="label-dropdown"
          isMulti
          options={times}
          placeholder="Preferred Study Time"
          onChange={(selectedOptions) => handleFilterChange(selectedOptions, setSelectedTimes)}
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
      {/* {groups.map((group) => (
        <div key={group.id} className="container">
          <img src={group.image} alt={group.title} className="item" />
          <div className="title">{group.title}</div>
          <div className="description">{group.description}</div>
        </div>
      ))} */}
        {filteredGroups.map((group) => (
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
