import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import BrowseGroups from './BrowseGroups/BrowseGroups';

function Sidebar() {
  const [open, setOpen] = useState(true);
  //If you have any unread messages, they show up in here? In that case, we'd append those chats here.
  var Menus = [
    { title: "Profile", path: "/profile", gap: true },
    { title: "Home", path: "/" },
    { title: "Browse Groups", path: "/browse-groups" },
  ];
  // <img src={"/the folder/${Menu.title}.file format of the image"} />
  // name image file accordingly
  return (
    <ul class="Sidebar">
      {Menus.map((Menu) => (<>
        <li class="Sidebar">
          <img src="" />
          <NavLink to={Menu.path} id="link">{Menu.title}</NavLink>
        </li>
        {Menu.gap? <p style={{"margin-bottom": "30px"}} /> : <></>}
      </>))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <div class="column" id="left-column"><Sidebar /></div>
        <div class="column" id="right-column"><Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/browse-groups" element={<BrowseGroups />} />
        </Routes></div>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
