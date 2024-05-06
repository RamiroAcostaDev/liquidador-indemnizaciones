import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { Box } from "@mui/material";
import Art9Checkbox from "../components/Art9Checkbox";
import FechaRegistracionInput from "../components/FechaRegistracionInput";
const Art9Input = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { art9Checked } = context;
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
      <Art9Checkbox />
      {art9Checked && <FechaRegistracionInput />}
    </Box>
  );
};

export default Art9Input;
