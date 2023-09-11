import React from "react";
import "./Laptop.css";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import Home from "../../src/components/Home/Home";
import LNotes from "../../src/components/Notes/LNotes";
import UseContext from "../useContext";

function Laptop() {
  const { selected } = UseContext();

  return (
    <div className="system">
      <Sidebar />
      {selected.length > 0 ? <LNotes /> : <Home />}
    </div>
  );
}

export default Laptop;
