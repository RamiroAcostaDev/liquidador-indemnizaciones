import { Box } from "@mui/material";
import { CheckboxInput } from "../components/CheckboxInput";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";
import { IntroducirRemuneracion } from "../components/IntroducirRemuneracion";

export const DiferenciasSalariales = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;

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
      width={"280px"}
    >
      <CheckboxInput
        context={context}
        title="¿Calcular diferencias salariales?"
        dispatchType="DIFERENCIAS_SALARIALES_CHECKED"
        stateName="diferenciasSalarialesChecked"
      />
      {state.diferenciasSalarialesChecked && (
        <IntroducirRemuneracion
          context={context}
          title="Remuneracion percibida:"
          dispatchType="REMUNERACION_PERCIBIDA"
          stateName="remuneracionPercibida"
        />
      )}
    </Box>
  );
};
