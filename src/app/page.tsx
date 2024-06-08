"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import DatosPrincipalesInputs from "./newComponents/DatosPrincipalesInputs";
import ListaPrueba from "./newComponents/ListaPrueba";

export default function CompensationLiquidator() {
  return (
    <>
      <Container>
        <Box p={1}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={5}
            border={1}
            borderRadius={5}
            padding={2}
          >
            <DatosPrincipalesInputs />
            <ListaPrueba />
          </Box>
        </Box>
      </Container>
    </>
  );
}
