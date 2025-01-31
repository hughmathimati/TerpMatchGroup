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
  'Coding',
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
  'src/classImages/programming.png',
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

  <div className="header2">Home</div>

    <div className="title">Current Classes →</div>
    <div className="grid">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="circle">
      <img src={class_image[index]} id="home-image" alt={`Class ${index + 1}`} />
      <div className="match-info">
        </div>
      {class_names[index]}
    </div> 
  ))}
</div>

<div className="title">Matches→</div>
<div className="grid">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="square">
      <img src={match_image[index]} id="home-image" alt={`Match ${index + 1}`} />
      {/* {match_names[index]} */}
      <div className="match-info">
      </div>
      {match_names[index]}
    </div>
  ))}
</div>

  </>);
}