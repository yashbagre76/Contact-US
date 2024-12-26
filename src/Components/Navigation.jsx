import React from "react";

function Navigation() {
  return (
    <nav>
      <div className="flex">
        <img src="\src\assets\Images\logo pg.png" alt="" />
      </div>
      <ul className=" flex gap-11">
        <li> Home </li>
        <li> About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
