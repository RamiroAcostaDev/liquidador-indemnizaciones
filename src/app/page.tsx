"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import DatosPrincipalesInputs from "./newComponents/DatosPrincipalesInputs";
import ListaPrueba from "./newComponents/ListaPrueba";

export default function CompensationLiquidator() {
  return (
    <>
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={3}
        >
          <h1>Liquidaciones Laborales</h1>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={3}
            border={1}
            borderRadius={5}
            padding={2}
          >
            <DatosPrincipalesInputs />
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
            <ListaPrueba />
          </Box>
        </Box>
      </Container>
    </>
  );
}
