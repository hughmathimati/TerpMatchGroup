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
const current_classes = [];
const matches = [];
const class_picture = [];
const match_picture = [];

export default function Home() {
  return (<>

  <div className="header">Home</div>
    <div className="subtitle">Your Profile</div>
    <div className="title">Current Classes →</div>

    <div className="grid">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="circle">
      Class {index + 1}
    </div>
  ))}
</div>


    <div className="title">Matches→</div>
    <div className="grid">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="square">
      Match {index + 1}
    </div>
  ))}
</div>



  </>);
}