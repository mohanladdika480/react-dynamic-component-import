import React from "react";
import Button from "@mui/material/Button";

const CommonButton = (props) => {
  const { handleClick, styles, children, disabled } = props;
  return (
    <Button
      sx={{
        background: "transparent",
        border: "1px solid #880E4F",
        color: "#880E4F",
        textTransform: "none",
        fontWeight: "600",
        ...styles,
        "&:disabled": {
          opacity: 0.4,
          border: "1px solid grey",
          color: "grey",
        },
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
