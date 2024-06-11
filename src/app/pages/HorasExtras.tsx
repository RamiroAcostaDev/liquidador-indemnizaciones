import { Box } from "@mui/material";
import { CheckboxInput } from "../components/CheckboxInput";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";

import { IntroducirHoras } from "../components/IntroducirHoras";
import { IntroducirDias } from "../components/IntroducirDias";
export const HorasExtras = () => {
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
        title="¿Calcular horas extras?"
        dispatchType="HORAS_EXTRAS_CHECKED"
        stateName="horasExtrasChecked"
      />
      {state.horasExtrasChecked && (
        <Box>
          <IntroducirHoras
            context={context}
            title="Horas trabajadas por dia:"
            dispatchType="HORAS_TRABAJADAS"
            stateName="horasTrabajadas"
          />
          <IntroducirDias
            context={context}
            title="Dias trabajados por semana:"
            dispatchType="DIAS_TRABAJADOS"
            stateName="diasTrabajados"
          />
          <IntroducirHoras
            context={context}
            title="Jornada CCT:"
            dispatchType="JORNADA_CCT"
            stateName="jornadaCCT"
          />
        </Box>
      )}
    </Box>
  );
};
