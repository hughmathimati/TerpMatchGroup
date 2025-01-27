import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import './Account.css';

const Account = () => {
  const [majorMinor, setMajorMinor] = useState([]);
  const [interests, setInterests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [groupSize, setGroupSize] = useState([]);
  const [studyTime, setStudyTime] = useState([]);

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
    { value: 'Math141', label: 'Math141' },
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

  // const majors = ['Computer Science', 'Mathematics', 'Physics', 'Biology', 'English', 'History'];
  // const hobbies = ['Reading', 'Gaming', 'Hiking', 'Cooking', 'Gym', 'Dance'];
  // const classes = ['CMSC131', 'CMSC132', 'MATH140', 'Math141', 'COMM107', 'ENES100'];
  // const sizes = ['2', '3-5', '6-9', '10-12', '13-15', '15+'];
  // const times = ['<6am','6am-9am', '9am-12pm', '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am', '12am<'];

  // const handleSelectChange = (event, setState) => {
  //   const options = event.target.options;
  //   const selectedOptions = [];
  //   for (let i = 0; i < options.length; i++) {
  //     if (options[i].selected) {
  //       selectedOptions.push(options[i].value);
  //     }
  //   }
  //   setState(selectedOptions);
  // };

  return (
    <div className="account-page">
      <div className="account-container">
        <h1>Account</h1>
        <form>
          <div className="form-group">
            <label htmlFor="majorMinor">Major/Minor:</label>
            <Select
              id="majorMinor"
              isMulti
              options={majors}
              value={majorMinor}
              onChange={setMajorMinor}
              // {/* multiple
              // value={majorMinor}
              // onChange={(e) => handleSelectChange(e, setMajorMinor)}
              // {majors.map((major) => (
              //   <option key={major} value={major}>
              //     {major}
              //   </option>
              // ))} */}
            />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Hobbies/Interests:</label>
            <Select
              id="interests"
              isMulti
              options={hobbies}
              value={interests}
              onChange={setInterests}
              // {/* multiple
              // value={interests}
              // onChange={(e) => handleSelectChange(e, setInterests)}
              // {hobbies.map((hobby) => (
              //   <option key={hobby} value={hobby}>
              //     {hobby}
              //   </option>
              // ))} */}
            />
          </div>
          <div className="form-group">
            <label htmlFor="courses">Courses:</label>
            <Select
              id="courses"
              isMulti
              options={classes}
              value={courses}
              onChange={setCourses}
              // {/* multiple
              // value={courses}
              // onChange={(e) => handleSelectChange(e, setCourses)}
              // {classes.map((course) => (
              //   <option key={course} value={course}>
              //     {course}
              //   </option>
              // ))} */}
            />
          </div>
          <div className="form-group">
            <label htmlFor="groupSize">Preferred Group Size:</label>
            <Select
              id="groupSize"
              isMulti
              options={sizes}
              value={groupSize}
              onChange={setGroupSize}
              // {/* multiple
              // value={groupSize}
              // onChange={(e) => handleSelectChange(e, setGroupSize)}
              // {sizes.map((size) => (
              //   <option key={size} value={size}>
              //     {size}
              //   </option>
              // ))} */}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studyTime">Preferred Study Time:</label>
            <Select
              id="studyTime"
              isMulti
              options={sizes}
              value={groupSize}
              onChange={setGroupSize}
              // {/* multiple
              // value={studyTime}
              // onChange={(e) => handleSelectChange(e, setStudyTime)}
              // {times.map((time) => (
              //   <option key={time} value={time}>
              //     {time}
              //   </option>
              // ))} */}
            />
          </div>
        </form>
      </div>
      <div className="settings-container">
        <h1>Settings</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter new password" />
          </div>
          <div className="form-group">
            <label htmlFor="notifications">Notifications:</label>
            <select id="notifications">
              <option value="all">All Notifications</option>
              <option value="email">Email Only</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <select id="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="mandarin">Mandarin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="privacy">Privacy Settings:</label>
            <select id="privacy">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;