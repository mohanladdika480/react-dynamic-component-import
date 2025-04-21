import React from "react";
import ContentRenderer from "../../Common/ContentRenderer";
import { componentLifeCycle, reactHooks, useEffectHook, useStateHook } from "./LifecycleAndHooksData";

const conceptData = {
  topic: "React Component Lifecycle and Hooks",
  subTopics: [
    {
      topicName: "React Component Lifecycle",
      detailedList: componentLifeCycle,
    },
    {
      topicName: "What are Hooks?",
      detailedList: reactHooks,
    },
    {
      topicName: "useState hook",
      detailedList: useStateHook,
    },
    {
      topicName: "useEffect hook",
      detailedList: useEffectHook,
    }
  ],
};

const LifecycleAndHooks = () => {
  return <ContentRenderer conceptData={conceptData} />;
};

export default LifecycleAndHooks;
