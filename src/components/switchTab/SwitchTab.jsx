import React, { useState } from "react";
import "./SwitchTab.scss"

const SwitchTab = ({ data, onTabChange }) => {
    const [selecated, setSelecated] = useState(0)
    const [left, setLeft] = useState(0)
    const activeTab = (tab, index) =>{
      setLeft(index*100)
      setTimeout(() => {
        setSelecated(index)
      }, 300);
      onTabChange()
    }
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span key={index} className={`tabItem ${selecated == index? "active": ""}`} onClick={()=>activeTab(tab,index)}>
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  );
};

export default SwitchTab;
