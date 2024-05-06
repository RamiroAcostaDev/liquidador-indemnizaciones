import React from "react";
import { Box } from "@mui/material";
import Art80Checkbox from "../components/Art80Checkbox";
const Art80Input = () => {
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
      <Art80Checkbox />
    </Box>
  );
};

export default Art80Input;
