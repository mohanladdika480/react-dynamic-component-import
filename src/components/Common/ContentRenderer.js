import React, { useState } from "react";
import { Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import CommonButton from "./CommonButton";

/**
 * ContentRenderer component renders the main topic and its subtopics.
 * It allows navigation between different subtopics and displays detailed content for each subtopic.
 *
 */
const ContentRenderer = ({ conceptData }) => {
  const { topic, subTopics } = conceptData;

  const [displayContentIndex, setDisplayContentIndex] = useState(null);

  const handleDisplayContent = (index) => {
    setDisplayContentIndex(index + 1);
  };

  const handleBack = () => {
    setDisplayContentIndex(null);
  };

  const handleNext = () => {
    window.scrollTo(0, 0, "smooth");
    setDisplayContentIndex(displayContentIndex + 1);
  };

  const handlePrevious = () => {
    window.scrollTo(0, 0, "smooth");
    setDisplayContentIndex(displayContentIndex - 1);
  };

  const renderSubContent = () => {
    const { topicName, detailedList } = subTopics?.[displayContentIndex - 1];
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowBack
            onClick={handleBack}
            sx={{ mr: "10px", cursor: "pointer" }}
          />
          <h2 className="text_color_1 no_margin">{topicName}</h2>
        </Box>
        {detailedList?.map((content, index) => (
          <Box key={index} sx={{ pl: content.padLeft ? 4 : 0 }}>
            <h2>{content.contentName}</h2>
            {content?.contentList && (
              <ul className="list_style_content">
                {content?.contentList?.map((item, ind) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: item }}
                    key={`${content.contentName}_${ind}`}
                  />
                ))}
              </ul>
            )}
            {content?.contentTable && (
              <Box className="scrollbar_auto_styles">
                <table>
                  <thead>
                    <tr>
                      {content?.contentTable?.headers.map((header, ind) => (
                        <th key={`${content.contentName}_${ind}`}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content?.contentTable?.rows.map((row, ind) => (
                      <tr key={`${content.contentName}_${ind}`}>
                        {row.map((cell, i) => (
                          <td key={`${content.contentName}_${ind}_${i}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            )}
            {content.contentCodeBlock && (
              <pre>
                <code>{content.contentCodeBlock}</code>
              </pre>
            )}
          </Box>
        ))}
        <Box
          sx={{
            mt: "20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <CommonButton
            handleClick={handlePrevious}
            disabled={displayContentIndex === 1}
          >
            ⯇ Previous
          </CommonButton>
          <CommonButton
            handleClick={handleNext}
            disabled={displayContentIndex === subTopics?.length}
          >
            Next ⯈
          </CommonButton>
        </Box>
      </>
    );
  };

  return (
    <>
      <h1>{topic}</h1>
      {displayContentIndex ? (
        renderSubContent()
      ) : (
        <ol className="list_heading">
          {conceptData?.subTopics.map((content, index) => (
            <li key={index} onClick={() => handleDisplayContent(index)}>
              {content?.topicName}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default ContentRenderer;
