import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import { Box } from "@mui/material";

import SalarioInput from "../components/SalarioInput";
import FechaDeInicioInput from "../components/FechaDeInicioInput";
import FechaFinalInput from "../components/FechaFinalInput";
import PreavisoCheckbox from "../components/PreavisoCheckbox";

const IndemnizacionPorAntiguedadInputs = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    fechaInicial,

    fechaFinal,

    setPeriodo,
  } = context;

  const calculatePeriod = (a: Date, b: Date) => {
    let initialDateMoment = moment(a);
    let finalDateMoment = moment(b);
    let diffYears = finalDateMoment.diff(initialDateMoment, "years");
    initialDateMoment.add(diffYears, "years");

    let calculatedPeriod = diffYears;

    let remainingMonths = finalDateMoment.diff(initialDateMoment, "months");
    if (remainingMonths >= 3) {
      calculatedPeriod++;
    }

    if (calculatedPeriod < 1) {
      console.log("La fecha final no puede ser mayor a la fecha inicial");
      calculatedPeriod = 0;
    }
    setPeriodo(calculatedPeriod);
  };

  useEffect(() => {
    calculatePeriod(fechaInicial, fechaFinal);
  }, [fechaInicial, fechaFinal]);
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
      <h1>Indemnizacion por antiguedad</h1>
      <SalarioInput />
      <FechaDeInicioInput />
      <FechaFinalInput />
      <PreavisoCheckbox />
    </Box>
  );
};

export default IndemnizacionPorAntiguedadInputs;
