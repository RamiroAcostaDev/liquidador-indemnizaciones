import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";
import { IntroducirRemuneracion } from "../components/IntroducirRemuneracion";
import { IntroducirFecha } from "../components/IntroducirFecha";
import { CheckboxInput } from "../components/CheckboxInput";

export const DatosPrincipales = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
      p={2}
      bgcolor={"#2D3250"}
      borderRadius={5}
    >
      <Typography variant="body1" color="white">
        Datos Principales
      </Typography>
      <IntroducirRemuneracion
        context={context}
        title="Remuneracion devengada:"
        dispatchType="REMUNERACION_DEVENGADA"
        stateName="remuneracionDevengada"
      />
      <IntroducirFecha
        context={context}
        title="Fecha de ingreso:"
        dispatchType="FECHA_INGRESO"
        stateName="fechaIngreso"
      />
      <IntroducirFecha
        context={context}
        title="Fecha de egreso:"
        dispatchType="FECHA_EGRESO"
        stateName="fechaEgreso"
      />
      <CheckboxInput
        context={context}
        title="¿Hubo preaviso?"
        dispatchType="PREAVISO_CHECKED"
        stateName="preavisoChecked"
      />
      <CheckboxInput
        context={context}
        title="¿Se entregaron los certificados de trabajo?"
        dispatchType="ART80_CHECKED"
        stateName="art80Checked"
      />
    </Box>
  );
};
