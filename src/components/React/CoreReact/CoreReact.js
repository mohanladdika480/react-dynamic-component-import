import React from "react";
import ContentRenderer from "../../Common/ContentRenderer";
import {reactConcepts, reactComponents, reactProps, reactListsAndKeys}  from "./CoreReactConceptsData";

const reactCoreList = {
  topic: "Core React",
  subTopics: [
    {
      topicName: "React, JSX, Virtual DOM vs Real DOM, Reconciliation",
      detailedList: reactConcepts,
    },
    {
      topicName: "Components in React, Class and Functional Components",
      detailedList: reactComponents,
    },
    {
      topicName: "Props, props drilling, HOCs, Render Props",
      detailedList: reactProps,
    },
    {
      topicName: "Lists and Keys, Event Handling and Conditional Rendering",
      detailedList: reactListsAndKeys,
    }
  ],
};

const CoreReact = () => {
  return <ContentRenderer conceptData={reactCoreList} />;
};

export default CoreReact;
