import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { Box } from "@mui/material";
import SalarioPercibidoInput from "../components/SalarioPercibidoInput";
import DiferenciasSalarialesCheckbox from "../components/DiferenciasSalarialesCheckbox";
const DiferenciasSalarialesInputs = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { DiferenciasSalarialesChecked } = context;
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
      <DiferenciasSalarialesCheckbox />
      {DiferenciasSalarialesChecked && <SalarioPercibidoInput />}
    </Box>
  );
};

export default DiferenciasSalarialesInputs;
