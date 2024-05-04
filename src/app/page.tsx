"use client";
//Cambiar float por numero entero y agragar el punto con un slice
//Investigar useReducer para manipular estados globales
//Hacer componentes para cada función
//Ver formato de numeros

import { ContextsProvider } from "./context/ContextProvider";
import { Box, Container } from "@mui/material";
import React from "react";
import InputsData from "./components/InputsData";
import Art245 from "./components/Art245";
import Art232 from "./components/Art232";
import SacArt232 from "./components/SacArt232";
import Art233 from "./components/Art233";
import SacArt233 from "./components/SacArt233";
import DiasTrabajadosMesEnCurso from "./components/DiasTrabajadosMesEnCurso";
import SacProporcional from "./components/SacProporcional";
import VacacionesProporcionales from "./components/VacacionesProporcionales";
import SacVacacionesProporcionales from "./components/SacVacacionesProporcionales";
import DiferenciasSalariales from "./components/DiferenciasSalariales";
import HorasExtras from "./components/HorasExtras";
import Art8Ley24013 from "./components/Art8Ley24013";
import Art9Ley24013 from "./components/Art9Ley24013";
import Art10Ley24013 from "./components/Art10Ley24013";
import Art15Ley24013 from "./components/Art15Ley24013";

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

export default function CompensationLiquidator() {
  return (
    <>
      <ContextsProvider>
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={10}
          >
            <h1>Compensation Liquidator</h1>

            <InputsData />
            <ul>
              <Art245 />
              <Art232 />
              <SacArt232 />
              <Art233 />
              <SacArt233 />
              <DiasTrabajadosMesEnCurso />
              <SacProporcional />
              <VacacionesProporcionales />
              <SacVacacionesProporcionales />
              <DiferenciasSalariales />
              <HorasExtras />
              <Art8Ley24013 />
              <Art9Ley24013 />
              <Art10Ley24013 />
              <Art15Ley24013 />
            </ul>
          </Box>
        </Container>
      </ContextsProvider>
    </>
  );
}
