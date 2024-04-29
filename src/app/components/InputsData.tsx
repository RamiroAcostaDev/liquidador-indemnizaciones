import React, { useEffect, useContext } from "react";
import { Box } from "@mui/material";

import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
export default function InputsData() {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    fechaInicial,
    setFechaInicial,
    fechaFinal,
    setFechaFinal,
    salario,
    setSalario,
    periodo,
    setPeriodo,
  } = context;

  const handleSalarioChange = (event: InputChangeEvent) => {
    setSalario(Number(event.target.value));
    console.log("Salario: ", salario);
  };

  const handleFechaInicioChange = (event: InputChangeEvent) => {
    setFechaInicial(new Date(event.target.value)),
      console.log("Fecha inicial: ", fechaInicial);
  };

  const handleFechaFinalChange = (event: InputChangeEvent) => {
    setFechaFinal(new Date(event.target.value));
    console.log("Fecha final: ", fechaFinal);
  };

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
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Salary Input:
        <input
          type="number"
          onChange={handleSalarioChange}
          style={{ border: "1px solid black", borderRadius: "5px" }}
        />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Set Initial Date:
        <input
          type="date"
          onChange={handleFechaInicioChange}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Set Initial Date:
        <input
          type="date"
          onChange={handleFechaFinalChange}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
      </label>
    </Box>
  );
}
