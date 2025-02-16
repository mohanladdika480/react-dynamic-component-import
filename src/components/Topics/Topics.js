import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import constants from "../constants/constants.json";

const { reactTopicsList } = constants;

const Topics = () => {
  return (
    <>
      <h2>React</h2>
      {reactTopicsList?.map((topic, index) => (
        <Accordion
          key={topic.name}
          expandIcon={<ExpandMore />}
          sx={{
            backgroundColor: "#000000db",
            "&.Mui-expanded": {
              mb: "4px",
              borderRadius: "4px",
            },
          }}
        >
          <AccordionSummary
            sx={{
              "&.MuiButtonBase-root": {
                minHeight: "0px",
                "& .MuiAccordionSummary-content.Mui-expanded": {
                  my: "6px",
                },
                "& .MuiAccordionSummary-content": {
                  my: "6px",
                },
              },
              color: "#007097",
            }}
          >
            <p>
              <b>
                {index + 1}. {topic.name}
              </b>
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: "0px", color: "#9a9d9f" }}>
            <ul>
              {topic?.items?.map((item, subIndex) => (
                <li
                  key={`${topic?.name}-${index}-${subIndex}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                  className="mb_4"
                />
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Topics;
