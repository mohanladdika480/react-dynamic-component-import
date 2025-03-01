import React from "react";
import ContentRenderer from "../../Common/ContentRenderer";
import { componentLifeCycle } from "./LifecycleAndHooksData";

const conceptData = {
  topic: "React Component Lifecycle and Hooks",
  subTopics: [
    {
      topicName: "React Component Lifecycle",
      detailedList: componentLifeCycle,
    },
  ],
};

const LifecycleAndHooks = () => {
  return <ContentRenderer conceptData={conceptData} />;
};

export default LifecycleAndHooks;
