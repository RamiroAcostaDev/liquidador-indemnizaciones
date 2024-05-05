import React, { useEffect, useContext } from "react";
import { Box } from "@mui/material";

import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import SalarioInput from "./SalarioInput";
import SalarioPercibidoInput from "./SalarioPercibidoInput";
import SalarioRegistradoInput from "./SalarioRegistradoInput";
import FechaDeInicioInput from "./FechaDeInicioInput";
import FechaFinalInput from "./FechaFinalInput";
import FechaRegistracionInput from "./FechaRegistracionInput";
import HorasTrabajadasPorDiaInput from "./HorasTrabajadasPorDiaInput";
import DiasTrabajadosPorSemanaInput from "./DiasTrabajadosPorSemanaInput";
import JornadaMaximaLegalInput from "./JornadaMaximaLegalInput";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

export default function InputsData() {
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
      gap={3}
    >
      <SalarioInput />
      <SalarioPercibidoInput />
      <SalarioRegistradoInput />
      <FechaDeInicioInput />
      <FechaFinalInput />
      <FechaRegistracionInput />
      <HorasTrabajadasPorDiaInput />
      <DiasTrabajadosPorSemanaInput />
      <JornadaMaximaLegalInput />
    </Box>
  );
}
