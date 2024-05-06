import React from "react";
import { Box } from "@mui/material";
import Art8Checkbox from "../components/Art8Checkbox";

const Art8Input = () => {
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
      <Art8Checkbox />
    </Box>
  );
};

export default Art8Input;
