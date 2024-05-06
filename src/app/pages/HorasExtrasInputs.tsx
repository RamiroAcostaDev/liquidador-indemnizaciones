import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

import { Box } from "@mui/material";

import HorasExtrasCheckbox from "../components/HorasExtrasCheckbox";
import HorasTrabajadasPorDiaInput from "../components/HorasTrabajadasPorDiaInput";
import DiasTrabajadosPorSemanaInput from "../components/DiasTrabajadosPorSemanaInput";
import JornadaMaximaLegalInput from "../components/JornadaMaximaLegalInput";

const HorasExtrasInputs = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { horasExtrasChecked } = context;
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
      <HorasExtrasCheckbox />
      {horasExtrasChecked && <HorasTrabajadasPorDiaInput />}
      {horasExtrasChecked && <DiasTrabajadosPorSemanaInput />}
      {horasExtrasChecked && <JornadaMaximaLegalInput />}
    </Box>
  );
};

export default HorasExtrasInputs;
