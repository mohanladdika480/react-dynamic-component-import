import React from "react";
import { Box } from "@mui/material";

const ContentRenderer = ({ contentList }) => {

  return (
    <>
      {contentList?.map((content, index) => (
        <Box key={index} sx={{ pl: content.padLeft ? 4 : 0 }}>
          <h2>{content.contentName}</h2>
          {content.contentList && (
            <ul className="list_style_content">
              {content.contentList?.map((item, ind) => (
                <li
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={`${content.contentName}_${ind}`}
                />
              ))}
            </ul>
          )}
          {content.constentTable && (
            <Box className="scrollbar_auto_styles">
              <table>
                <thead>
                  <tr>
                    {content.constentTable.headers.map((header, ind) => (
                      <th key={`${content.contentName}_${ind}`}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.constentTable.rows.map((row, ind) => (
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
    </>
  );
};

export default ContentRenderer;
