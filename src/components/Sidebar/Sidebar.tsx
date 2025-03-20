import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Home from '../home/home-component'

export const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="FULLX">
    <div className={show ? "space-toggle" : 'null'}>
   

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
       
          
        </nav>
      </aside>

    </div>
      <Home />
      </ div>
  );
};


