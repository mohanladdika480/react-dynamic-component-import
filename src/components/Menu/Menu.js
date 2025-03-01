import React, { useEffect, useState } from "react";
import "./Menu.scss";

export const tabs = [
  { name: "Home", href: "#" },
  { name: "Topics", href: "#Topics" },
  { name: "JavaScript", href: "#JavascriptConcepts" },
  { name: "React", href: "#ReactConcepts" },
  { name: "HTML", href: "#html" },
  { name: "CSS", href: "#css" },
  { name: "SCSS", href: "#scss" },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => { 
    let [base] = window.location.hash?.replace(/(#|Concepts)/g, "")?.split("_");
    if (base) {
      setActiveTab(base?.toLowerCase());
    }
  }, []);

  return (
    <div className="menu">
      <nav className="menu-nav">
        <ul className="menu-list">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`menu-item no_margin ${
                activeTab === tab.name.toLowerCase() ? "active" : ""
              }`}
            >
              <a
                href={tab.href}
                onClick={() => handleTabClick(tab.name.toLowerCase())}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
