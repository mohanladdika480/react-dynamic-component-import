import React from "react";
import Concepts from "../Concepts/Concepts";

const JavascriptConcepts = () => {
  const concepts = [
    { name: "Variables", link: "Javascript_Variables" },
    { name: "Functions", link: "Javascript_Functions" },
    { name: "Objects", link: "Javascript_Objects" },
    { name: "Arrays", link: "Javascript_Arrays" },
    { name: "Promises", link: "Javascript_Promises" },
  ];

  return <Concepts title="JavaScript Concepts" concepts={concepts} />;
};

export default JavascriptConcepts;
