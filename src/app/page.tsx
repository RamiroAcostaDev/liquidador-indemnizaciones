"use client";
//Cambiar float por numero entero y agragar el punto con un slice
//

import { useState } from "react";
import { Indemnización, RelacionDeTrabajo } from "./Types";
import {
  calcularArt245,
  calcularArt232,
  sacSobreArt232,
  calcularArt233,
  sacSobreArt233,
  diasTrabajadosMesEnCurso,
  calcularSacProporcional,
} from "./Functions";
import moment from "moment";
import { Box, Container } from "@mui/material";

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
    setInputRelacionDeTrabajo({
      ...inputRelacionDeTrabajo,
      salario: Number(event.target.value),
    });
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
    setInputRelacionDeTrabajo({
      ...inputRelacionDeTrabajo,
      fechaFinal: new Date(event.target.value),
    });
    console.log("Fecha final: ", inputRelacionDeTrabajo.fechaFinal);
  };

  const calcularIndemnizacion = () => {
    setIndemnizacionTotal({
      ...indemnizacionTotal,
      art245: calcularArt245(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaInicio,
        inputRelacionDeTrabajo.fechaFinal
      ),
      art232: calcularArt232(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaInicio,
        inputRelacionDeTrabajo.fechaFinal
      ),
      art233: calcularArt233(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaFinal
      ),
      sacArt232: sacSobreArt232(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaInicio,
        inputRelacionDeTrabajo.fechaFinal
      ),
      sacArt233: sacSobreArt233(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaFinal
      ),
      diasTrabajados: diasTrabajadosMesEnCurso(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaFinal
      ),
      sacProporcional: calcularSacProporcional(
        inputRelacionDeTrabajo.salario,
        inputRelacionDeTrabajo.fechaFinal
      ),
    });
    console.log("Indemnización Art 245 LCT: ", indemnizacionTotal.art245);
    console.log("Indemnización Art 232 LCT: ", indemnizacionTotal.art232);
    console.log("Indemnización Art 233 LCT: ", indemnizacionTotal.art233);
  };

  return (
    <>
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
        >
          <h1>Compensation Liquidator</h1>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={{ xs: "column", sm: "row" }}
            gap={10}
          >
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
                  type="text"
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
              <label>
                Add Penalty <input type="checkbox" />
              </label>
              <button
                onClick={calcularIndemnizacion}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                Calculate
              </button>
            </Box>
            <Box>
              <ul>
                <li>
                  {indemnizacionTotal.art245 > 0 && (
                    <p>Art 245: {indemnizacionTotal.art245}</p>
                  )}
                </li>
                <li>
                  {indemnizacionTotal.art232 > 0 && (
                    <p>Art 232: {indemnizacionTotal.art232}</p>
                  )}
                </li>
                <li>
                  {indemnizacionTotal.sacArt232 > 0 && (
                    <p>Sac Art 232: {indemnizacionTotal.sacArt232}</p>
                  )}
                </li>
                <li>
                  {indemnizacionTotal.art233 > 0 && (
                    <p>Art 233: {indemnizacionTotal.art233}</p>
                  )}
                </li>
                <li>
                  {indemnizacionTotal.sacArt233 > 0 && (
                    <p>Sac Art 233: {indemnizacionTotal.sacArt233}</p>
                  )}
                </li>
                <li>
                  {indemnizacionTotal.diasTrabajados > 0 && (
                    <p>
                      Dias trabajados mes en curso:
                      {indemnizacionTotal.diasTrabajados}
                    </p>
                  )}
                </li>
                <li>
                  {indemnizacionTotal.sacProporcional > 0 && (
                    <p>
                      Sac Proporcional: {indemnizacionTotal.sacProporcional}
                    </p>
                  )}
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
