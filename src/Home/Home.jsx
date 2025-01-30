import * as React from "react";
import { useState, useEffect, useRef } from "react";
import './Home.css';

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
//use same format as above
const course_Names = [
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."},
  {prefix: "CMSC", id: "CMSC132", title: "Object Oriented Programming II", description: "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."}
];

const class_names = [
  'English',
  'History',
  'Language',
  'Math',
  'Music',
  'Science'
];

const match_names = [
  'Trina',
  'Tonya',
  'Megan',
  'Daniel',
  'Jacob',
  'Marina'
];

const class_image = [
  'src/classImages/english.png',
  'src/classImages/history.png',
  'src/classImages/language.png',
  'src/classImages/math.png',
  'src/classImages/music.png',
  'src/classImages/science.png'
];

const match_image = [
'src/matchImages/doctorStudent.png',
'src/matchImages/gymnast.png',
'src/matchImages/reader.png',
'src/matchImages/regularStudent.png',
'src/matchImages/soccerPlayer.png',
'src/matchImages/student.png',
];

export default function Home() {
  return (<>

  <div className="header">Home</div>
    <div className="subtitle">Your Profile</div>


    <div className="title">Current Classes →</div>
    <div className="grid">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="circle">
      <img src={class_image[index]} alt={`Class ${index + 1}`} />
      {class_names[index]}
      <h4>Class {index + 1}</h4> 
    </div>
  ))}
</div>

<div className="title">Matches→</div>
<div className="grid">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="square">
      <img src={match_image[index]} alt={`Match ${index + 1}`} />
      {match_names[index]}
      <div className="match-info">
      <h4>Match {index + 1} </h4> 
      </div>
    </div>
  ))}
</div>

  </>);
}