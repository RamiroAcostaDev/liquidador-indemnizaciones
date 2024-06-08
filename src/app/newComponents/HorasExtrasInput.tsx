import React from "react";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";

export const HorasExtrasCheckedInput = () => {
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
    >
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="initial">
          Calcular Horas Extras?
        </Typography>
      </label>
      <input
        type="checkbox"
        onChange={(e) =>
          dispatch({
            type: "HORAS_EXTRAS_CHECKED",
            payload: {
              ...state,
              horasExtrasChecked: e.target.checked,
            },
          })
        }
        max={48}
        min={1}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <Typography variant="body1" color="initial">
        {state.horasExtrasChecked.toString()}
      </Typography>
    </Box>
  );
};

export const HorasTrabajadasPorDiaInput = () => {
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
    >
      <label>
        <Typography variant="body1" color="initial">
          Horas diarias trabajadas:
        </Typography>
      </label>
      <input
        type="number"
        max={24}
        min={1}
        onChange={(e) =>
          dispatch({
            type: "HORAS_TRABAJADAS_POR_DIA",
            payload: {
              ...state,
              horasTrabajadasPorDia: Number(e.target.value),
            },
          })
        }
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <Typography variant="body1" color="initial">
        {state.horasTrabajadasPorDia.toString()}
      </Typography>
    </Box>
  );
};

export const DiasTrabajadosPorSemanaInput = () => {
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
    >
      <label>
        <Typography variant="body1" color="initial">
          Dias Trabajados Por Semana:
        </Typography>
      </label>
      <input
        type="number"
        max={7}
        min={1}
        onChange={(e) =>
          dispatch({
            type: "DIAS_TRABAJADOS_POR_SEMANA",
            payload: {
              ...state,
              diasTrabajadosPorSemana: Number(e.target.value),
            },
          })
        }
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <Typography variant="body1" color="initial">
        {state.diasTrabajadosPorSemana.toString()}
      </Typography>
    </Box>
  );
};

export const JornadaCCTInput = () => {
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
    >
      <label>
        <Typography variant="body1" color="initial">
          Jornada Maxima CCT:
        </Typography>
      </label>
      <input
        type="number"
        max={48}
        min={1}
        onChange={(e) =>
          dispatch({
            type: "JORNADA_CCT",
            payload: {
              ...state,
              jornadaCCT: Number(e.target.value),
            },
          })
        }
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
      <Typography variant="body1" color="initial">
        {state.jornadaCCT.toString()}
      </Typography>
    </Box>
  );
};

export const HorasExtrasInput = () => {
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
    >
      <HorasExtrasCheckedInput />
      {state.horasExtrasChecked && <HorasTrabajadasPorDiaInput />}
      {state.horasExtrasChecked && <DiasTrabajadosPorSemanaInput />}
      {state.horasExtrasChecked && <JornadaCCTInput />}
    </Box>
  );
};
