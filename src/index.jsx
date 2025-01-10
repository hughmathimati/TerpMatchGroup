import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, NavLink } from "react-router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';

function Sidebar() {
  const [open, setOpen] = useState(true);
  //If you have any unread messages, they show up in here? In that case, we'd append those chats here.
  var Menus = [
    { title: "Profile", path: "profile", gap: true },
    { title: "Home", path: "home" },
    { title: "Browse Groups", path: "browse-groups" },
  ];
  // <img src={"/the folder/${Menu.title}.file format of the image"} />
  // name image file accordingly
  return (
    <ul>
      {Menus.map((Menu) => (<li>
          <img />
          <NavLink to={Menu.path} id="link">{Menu.title}</NavLink>
          {Menu.gap? <p style={{"margin-bottom": "30px"}} /> : <></>}
      </li>))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Sidebar />
        
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
