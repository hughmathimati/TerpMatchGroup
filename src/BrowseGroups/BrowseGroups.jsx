import React from "react";
import { useState, useEffect, useRef } from "react";
import Select from 'react-select';
import './BrowseGroups.css';

const courses = [
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
];
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
      image: 'path/to/image7.jpg',
      title: 'Chemistry Enthusiasts',
      description: 'Join us to explore the wonders of chemistry!',
      labels: {
        major: '',
        hobby: '',
        class: '',
        size: '3-5',
        time: '3pm-6pm'
      }
    },
    {
      id: 8,
      image: 'path/to/image8.jpg',
      title: 'History Buffs',
      description: 'Dive into historical discussions and debates.',
      labels: {
        major: 'History',
        hobby: 'Reading',
        class: '',
        size: '15+',
        time: '6pm-9pm'
      }
    },
    {
      id: 9,
      image: 'path/to/image9.jpg',
      title: 'Bio Besties',
      description: 'Learn Biology! Make friends!',
      labels: {
        major: 'Biology',
        hobby: '',
        class: '',
        size: '15+',
        time: '9am-12pm'
      }
    },
    {
      id: 10,
      image: 'path/to/image10.jpg',
      title: 'The Thinkers',
      description: 'Engage in deep philosophical discussions. We stan Nietzche<3',
      labels: {
        major: 'Philosophy',
        hobby: '',
        class: '',
        size: '13-15',
        time: '12pm-3pm'
      }
    },
    {
      id: 11,
      image: 'path/to/image11.jpg',
      title: 'Art Lovers',
      description: 'Explore your creativity with fellow art enthusiasts.',
      labels: {
        major: 'Art',
        hobby: '',
        class: '',
        size: '3-5',
        time: '3pm-6pm'
      }
    },
    {
      id: 12,
      image: 'path/to/image12.jpg',
      title: 'Music Makers',
      description: 'Jam and create music together!',
      labels: {
        major: 'Music',
        hobby: '',
        class: '',
        size: '',
        time: '6pm-9pm'
      }
    },
    {
      id: 13,
      image: 'path/to/image13.jpg',
      title: 'Literature Circle',
      description: 'Discuss and analyze literature.',
      labels: {
        major: 'English',
        hobby: 'Reading',
        class: '',
        size: '3-5',
        time: '9am-12pm'
      }
    },
    {
      id: 14,
      image: 'path/to/image14.jpg',
      title: 'Economics Enthusiasts',
      description: 'Dive into economic theories and discussions.',
      labels: {
        major: 'Economics',
        hobby: '',
        class: '',
        size: '6-9',
        time: '12pm-3pm'
      }
    },
    {
      id: 15,
      image: 'path/to/image15.jpg',
      title: 'Political Science Group',
      description: 'Discuss political theories and current events.',
      labels: {
        major: '',
        hobby: '',
        class: '',
        size: '3-5',
        time: '3pm-6pm'
      }
    },
    {
      id: 16,
      image: 'path/to/image16.jpg',
      title: 'Sociology Society',
      description: 'Explore sociological concepts and theories.',
      labels: {
        major: '',
        hobby: 'Research',
        class: '',
        size: '6-9',
        time: '6pm-9pm'
      }
    },
    {
      id: 17,
      image: 'path/to/image17.jpg',
      title: 'Psychology Pals',
      description: 'Discuss psychological theories and case studies.',
      labels: {
        major: '',
        hobby: 'Reading',
        class: 'PSYC100',
        size: '15+',
        time: '9am-12pm'
      }
    },
    {
      id: 18,
      image: 'path/to/image18.jpg',
      title: 'MechE Innovators',
      description: 'Collaborate on engineering projects and ideas.',
      labels: {
        major: 'Mechanical Engineering',
        hobby: 'Building',
        class: 'ENES100',
        size: '6-9',
        time: '12pm-3pm'
      }
    },
    {
      id: 19,
      image: 'path/to/image19.jpg',
      title: 'Business Minds',
      description: 'Discuss business strategies and case studies.',
      labels: {
        major: 'Business',
        hobby: '',
        class: '',
        size: '10-12',
        time: '3pm-6pm'
      }
    },
    {
      id: 20,
      image: 'path/to/image20.jpg',
      title: 'Environmentalists',
      description: 'Explore environmental science and sustainability.',
      labels: {
        major: 'Environmental Science',
        hobby: 'Nature',
        class: '',
        size: '6-9',
        time: '6pm-9pm'
      }
    },
    {
      id: 21,
      image: 'path/to/image21.jpg',
      title: 'Anthropology Study Group',
      description: 'Discuss anthropological theories.',
      labels: {
        major: '',
        hobby: 'Research',
        class: '',
        size: '3-5',
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
    { value: 'History', label: 'History' },
    { value: 'Art', label: 'Art' },
    { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
    { value: 'Philosophy', label: 'Philosophy' },
    { value: 'Business', label: 'Business' },
    { value: 'Economics', label: 'Economics' },
    { value: 'Environmental Science', label: 'Environmental Science' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Theatre', label: 'Theatre' },
    { value: 'Music', label: 'Music' }
  ];

  const hobbies = [
    { value: 'Reading', label: 'Reading' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Cooking', label: 'Cooking' },
    { value: 'Gym', label: 'Gym' },
    { value: 'Dance', label: 'Dance' },
    { value: 'Nature', label: 'Nature' },
    { value: 'Building', label: 'Building' },
    { value: 'Research', label: 'Research' }
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
      <div className="grid">
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
