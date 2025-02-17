import React from "react";
import constants from "../constants/constants.json";
import AccordianComponent from "../Common/AccordianComponent";

const { reactTopicsList } = constants;

const topicsList = [
  {
    name: "React",
    topics: reactTopicsList,
  },
];

const Topics = () => {
  return (
    <>
      {topicsList.map((topic) => (
        <React.Fragment key={topic.name}>
          <h2>{topic.name}</h2>
          <AccordianComponent items={topic.topics} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Topics;
