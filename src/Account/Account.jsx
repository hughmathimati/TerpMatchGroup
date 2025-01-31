import React from 'react';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import './Account.css';

const Account = () => {
  const [majorMinor, setMajorMinor] = useState(() => JSON.parse(localStorage.getItem('majorMinor')) || []);
  const [interests, setInterests] = useState(() => JSON.parse(localStorage.getItem('interests')) || []);
  const [courses, setCourses] = useState(() => JSON.parse(localStorage.getItem('courses')) || []);
  const [groupSize, setGroupSize] = useState(() => JSON.parse(localStorage.getItem('groupSize')) || []);
  const [studyTime, setStudyTime] = useState(() => JSON.parse(localStorage.getItem('studyTime')) || []);
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
  const [password, setPassword] = useState(() => localStorage.getItem('password') || '');
  const [notifications, setNotifications] = useState(() => localStorage.getItem('notifications') || 'all');
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'english');
  const [privacy, setPrivacy] = useState(() => localStorage.getItem('privacy') || 'public');

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

  useEffect(() => {
    localStorage.setItem('majorMinor', JSON.stringify(majorMinor));
  }, [majorMinor]);

  useEffect(() => {
    localStorage.setItem('interests', JSON.stringify(interests));
  }, [interests]);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('groupSize', JSON.stringify(groupSize));
  }, [groupSize]);

  useEffect(() => {
    localStorage.setItem('studyTime', JSON.stringify(studyTime));
  }, [studyTime]);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('password', password);
  }, [password]);

  useEffect(() => {
    localStorage.setItem('notifications', notifications);
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('privacy', privacy);
  }, [privacy]);

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
        <div className="header1">Account</div>
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
              options={times}
              value={studyTime}
              onChange={setStudyTime}
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
        <h3>Settings</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="form-group">
            <label htmlFor="notifications">Notifications:</label>
            <select
              id="notifications"
              value={notifications}
              onChange={(e) => setNotifications(e.target.value)}
            >
              <option value="all">All Notifications</option>
              <option value="email">Email Only</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="mandarin">Mandarin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="privacy">Privacy Settings:</label>
            <select
              id="privacy"
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
            >
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