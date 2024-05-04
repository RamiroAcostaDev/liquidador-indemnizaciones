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
    fechaDeRegistracion,
    setFechaDeRegistracion,
    salario,
    setSalario,
    periodo,
    setPeriodo,
    salarioPercibido,
    setSalarioPercibido,
    salarioRegistrado,
    setSalarioRegistrado,
    horasLaboradasPorDia,
    setHorasLaboradasPorDia,
    diasTrabajadosPorSemana,
    setDiasTrabajadosPorSemana,
    jornadaMaximaLegal,
    setJornadaMaximaLegal,
  } = context;

  const handleSalarioChange = (event: InputChangeEvent) => {
    setSalario(Number(event.target.value));
    console.log("Salario: ", salario);
  };

  const handleSalarioPercibidoChange = (event: InputChangeEvent) => {
    setSalarioPercibido(Number(event.target.value));
    console.log("Salario percibido: ", salarioPercibido);
  };

  const handleSalarioRegistradoChange = (event: InputChangeEvent) => {
    setSalarioRegistrado(Number(event.target.value));
    console.log("Salario registrado: ", salarioRegistrado);
  };

  const handleFechaInicioChange = (event: InputChangeEvent) => {
    setFechaInicial(new Date(event.target.value)),
      console.log("Fecha inicial: ", fechaInicial);
  };

  const handleFechaFinalChange = (event: InputChangeEvent) => {
    setFechaFinal(new Date(event.target.value));
    console.log("Fecha final: ", fechaFinal);
  };

  const handleFechaDeRegistracionChange = (event: InputChangeEvent) => {
    setFechaDeRegistracion(new Date(event.target.value));
    console.log("Fecha de registración: ", fechaDeRegistracion);
  };

  const handleHorasLaboradasPorDiaChange = (event: InputChangeEvent) => {
    setHorasLaboradasPorDia(Number(event.target.value));
    console.log("Horas laboradas por día: ", horasLaboradasPorDia);
  };

  const handleDiasTrabajadosPorSemanaChange = (event: InputChangeEvent) => {
    setDiasTrabajadosPorSemana(Number(event.target.value));
    console.log(
      "Cantidad de días trabajados por semana: ",
      diasTrabajadosPorSemana
    );
  };

  const handleJornadaMaximaLegalChange = (event: InputChangeEvent) => {
    setJornadaMaximaLegal(Number(event.target.value));
    console.log("Jornada máxima legal: ", jornadaMaximaLegal);
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
        Remuneracion Devengada:
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
        Remuneracion Percibida:
        <input
          type="number"
          onChange={handleSalarioPercibidoChange}
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
        Remuneracion Registrada:
        <input
          type="number"
          onChange={handleSalarioRegistradoChange}
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
        Fecha Inicial:
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
        Fecha Final:
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
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Fecha De Registracion:
        <input
          type="date"
          onChange={handleFechaDeRegistracionChange}
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
        Horas diarias trabajadas:
        <input
          type="number"
          onChange={handleHorasLaboradasPorDiaChange}
          max={24}
          min={1}
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
        Días trabajados en la semana:
        <input
          type="number"
          onChange={handleDiasTrabajadosPorSemanaChange}
          max={7}
          min={1}
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
        Jornada maxima semanal CCT:
        <input
          type="number"
          onChange={handleJornadaMaximaLegalChange}
          max={48}
          min={1}
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
