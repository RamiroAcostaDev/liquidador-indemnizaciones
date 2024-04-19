//Cambiar float por numero entero y agragar el punto con un slice
//

"use client";
import { useState } from "react";

import { Box, Container } from "@mui/material";
import moment from "moment";

interface Indemnización {
  art245: number;
  art232: number;
  sacArt232: number;
  art233: number;
  sacArt233: number;
  diasTrabajados: number;
  vacacionesProporcionales: number;
  sacVacaciones: number;
  sacProporcional: number;
  difSalarales: number;
  horasExtras: number;
  art8: number;
  art9: number;
  art10: number;
  art15: number;
  art80: number;
  art2: number;
}

interface RelacionDeTrabajo {
  fechaInicio: Date;
  fechaFinal: Date;
  salario: number;
  periodo: number;
  art8Checked: boolean;
  art9Checked: boolean;
  art10Checked: boolean;
  art80Checked: boolean;
  difSalarialesChecked: boolean;
  horasExtrasChecked: boolean;
}

const indemnizacion: Indemnización = {
  art245: 0,
  art232: 0,
  sacArt232: 0,
  art233: 0,
  sacArt233: 0,
  diasTrabajados: 0,
  vacacionesProporcionales: 0,
  sacVacaciones: 0,
  sacProporcional: 0,
  difSalarales: 0,
  horasExtras: 0,
  art8: 0,
  art9: 0,
  art10: 0,
  art15: 0,
  art80: 0,
  art2: 0,
};

const relacionDeTrabajo: RelacionDeTrabajo = {
  fechaInicio: new Date(),
  fechaFinal: new Date(),
  salario: 0,
  periodo: 0,
  art8Checked: false,
  art9Checked: false,
  art10Checked: false,
  art80Checked: false,
  difSalarialesChecked: false,
  horasExtrasChecked: false,
};

export default function CompensationLiquidator() {
  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const [indemnizacionTotal, setIndemnizacionTotal] = useState(indemnizacion);
  const [inputRelacionDeTrabajo, setInputRelacionDeTrabajo] =
    useState(relacionDeTrabajo);

  const handleSalarioChange = (event: InputChangeEvent) => {
    setInputRelacionDeTrabajo((prevState) => ({
      ...prevState,
      salario: Number(event.target.value),
    }));
    console.log("Salario: ", inputRelacionDeTrabajo.salario);
  };

  const handleFechaInicioChange = (event: InputChangeEvent) => {
    setInputRelacionDeTrabajo({
      ...inputRelacionDeTrabajo,
      fechaInicio: new Date(event.target.value),
    });
    console.log("Fecha inicial: ", inputRelacionDeTrabajo.fechaInicio);
  };

  const handleFechaFinalChange = (event: InputChangeEvent) => {
    setInputRelacionDeTrabajo((prevState) => ({
      ...prevState,
      fechaFinal: new Date(event.target.value),
    }));
    console.log("Fecha final: ", inputRelacionDeTrabajo.fechaFinal);
  };

  const calculatePeriod = (a: Date, b: Date): number => {
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
      console.log("La fecha final no puede ser menor a la fecha inicial");
      return 0;
    } else {
      return calculatedPeriod;
    }
  };

  const calcularArt245 = (
    salario: number,
    fechaInicial: Date,
    fechaFinal: Date
  ) => {
    let periodo = calculatePeriod(fechaInicial, fechaFinal);
    let indemnizacion245 = periodo * salario;
    return indemnizacion245;
  };

  const calcularArt232 = (
    salario: number,
    fechaInicial: Date,
    fechaFinal: Date
  ) => {
    let salarioPorDia = salario / 30;
    let periodo = calculatePeriod(fechaInicial, fechaFinal);
    if (periodo <= 3) {
      return salarioPorDia * 15;
    } else if (periodo > 3 && periodo <= 5) {
      return salarioPorDia * 30;
    } else {
      return salarioPorDia * 60;
    }
  };

  const calcularArt233 = (salario: number, fechaFinal: Date) => {
    const diasTrabajados = moment(fechaFinal)
      .utcOffset(new Date().getTimezoneOffset())
      .date();
    console.log(diasTrabajados);
    const diasDelMes = moment(fechaFinal).daysInMonth();
    const salarioPorDia = salario / diasDelMes;
    if (diasTrabajados === diasDelMes) {
      return 0;
    } else {
      return console.log(salarioPorDia * (diasDelMes - diasTrabajados));
    }
  };

  calcularArt233(100, inputRelacionDeTrabajo.fechaFinal);
  // const calculateCompensation = () => {
  //   let period: number = calculatePeriod(initialDate, finalDate);
  //   let compensation = period * salary;
  //   console.log(compensation);
  //   setCompensation(compensation);
  // };

  return (
    <>
      <Container maxWidth="xs">
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <h1>Compensation Liquidator</h1>
          <label>
            {" "}
            Salary Input:{" "}
            <input
              type="text"
              onChange={handleSalarioChange}
              style={{ border: "1px solid black", borderRadius: "5px" }}
            />
          </label>
          <label>
            Set Initial Date:{" "}
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
          <label>
            Set Initial Date:{" "}
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
          <label>
            Add Penalty <input type="checkbox" />
          </label>

          <h1>0</h1>
          <button
            // onClick={calculateCompensation}
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            Calculate
          </button>
        </Box>
      </Container>
    </>
  );
}
