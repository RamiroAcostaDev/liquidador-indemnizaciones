"use client";
//Cambiar float por numero entero y agragar el punto con un slice
//Investigar useReducer para manipular estados globales
//Hacer componentes para cada función
//Ver formato de numeros

import { ContextsProvider } from "./context/ContextProvider";
import { Box, Container } from "@mui/material";
import React from "react";
import IndemnizacionPorAntiguedad from "./pages/Indemnizacion";
import IndemnizacionPorAntiguedadInputs from "./pages/IndemnizacionPorAntiguedadInputs";
import HorasExtrasInputs from "./pages/HorasExtrasInputs";
import DiferenciasSalarialesInputs from "./pages/DiferenciasSalarialesInputs";
import Art9Input from "./pages/Art9Input";
import Art8Input from "./pages/Art8Input";
import Art10Input from "./pages/Art10Input";
import Art80Input from "./pages/Art80Input";
import Art1Input from "./pages/Art1Input";

export default function CompensationLiquidator() {
  return (
    <>
      <ContextsProvider>
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={3}
          >
            <h1>Liquidaciones Laborales</h1>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <IndemnizacionPorAntiguedadInputs />
              <HorasExtrasInputs />
              <DiferenciasSalarialesInputs />
              <Art8Input />
              <Art9Input />
              <Art10Input />
              <Art1Input />
              <Art80Input />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={3}
              border={1}
              borderRadius={5}
              padding={2}
            >
              <IndemnizacionPorAntiguedad />
            </Box>
          </Box>
        </Container>
      </ContextsProvider>
    </>
  );
}
