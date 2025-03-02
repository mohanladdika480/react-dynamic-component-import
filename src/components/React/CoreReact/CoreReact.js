import React from "react";
import ContentRenderer from "../../Common/ContentRenderer";
import {
  reactConcepts,
  reactComponents,
  reactProps,
  reactListsAndKeys,
  reactPortals,
  databindings,
} from "./CoreReactConceptsData";

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
    },
    {
      topicName: "Portals in React",
      detailedList: reactPortals,
    },
    {
      topicName: "Data Binding in React, SPA & MPA",
      detailedList: databindings,
    },
  ],
};

const CoreReact = () => {
  return <ContentRenderer conceptData={reactCoreList} />;
};

export default CoreReact;
