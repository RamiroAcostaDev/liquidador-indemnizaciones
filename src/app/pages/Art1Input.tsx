import React from "react";
import { Box } from "@mui/material";
import Art1Checkbox from "../components/Art1Checkbox";

const Art1Input = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      border={1}
      borderRadius={5}
      padding={2}
    >
      <Art1Checkbox />
    </Box>
  );
};

export default Art1Input;
