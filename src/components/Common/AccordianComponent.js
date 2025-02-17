import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AccordianComponent = ({ items }) => {
  const [expandedList, setExpandedList] = React.useState([]);

  const handleExpand = (index) => {
    return () => {
      if (expandedList.includes(index)) {
        setExpandedList(expandedList.filter((item) => item !== index));
      } else {
        setExpandedList([...expandedList, index]);
      }
    };
  };

  return (
    <div>
      {items?.map((topic, index) => (
        <Accordion
          key={topic.name}
          aria-controls={`${"panel1-content"}-${index}`}
          id={`${"panel1-header"}-${index}`}
          sx={{
            backgroundColor: "#000000db",
            "&.Mui-expanded": {
              my: "0px",
            },
          }}
          expanded={expandedList?.includes(index)}
        >
          <AccordionSummary
            onClick={handleExpand(index)}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p>
                <b>
                  {index + 1}. {topic.name}
                </b>
              </p>
              {expandedList?.includes(index) ? <ExpandLess /> : <ExpandMore />}
            </Box>
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
    </div>
  );
};

export default AccordianComponent;
