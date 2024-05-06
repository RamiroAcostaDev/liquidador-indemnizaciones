import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { Box } from "@mui/material";
import Art10Checkbox from "../components/Art10Checkbox";
import SalarioPercibidoInput from "../components/SalarioPercibidoInput";
import SalarioRegistradoInput from "../components/SalarioRegistradoInput";
import FechaRegistracionInput from "../components/FechaRegistracionInput";

const Art10Input = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { art10Checked } = context;

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
      <Art10Checkbox />
      {art10Checked && <FechaRegistracionInput />}
      {art10Checked && <SalarioPercibidoInput />}
      {art10Checked && <SalarioRegistradoInput />}
    </Box>
  );
};

export default Art10Input;
