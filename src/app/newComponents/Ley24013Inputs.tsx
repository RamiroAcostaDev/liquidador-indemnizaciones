import React from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";

export const FechaRegistracion = ({ context }) => {
  // const context = useContext(DataContext);
  // if (!context) {
  //   throw new Error("Context is undefined");
  // }

  const { dispatch, ...state } = context;
  return (
    <Box>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Fecha de Registración:
        <input
          type="date"
          onChange={(e) =>
            dispatch({
              type: "FECHA_REGISTRACION",
              payload: {
                ...state,
                fechaRegistracion: new Date(e.target.value),
              },
            })
          }
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
      </label>
      <p>{state.fechaRegistracion.toString()}</p>
    </Box>
  );
};

export const Art8Checked = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;
  return (
    <Box>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Calcular Art 8 Ley 24013?
        <input
          type="checkbox"
          onChange={(e) =>
            dispatch({
              type: "ART8_CHECKED",
              payload: {
                ...state,
                art8Checked: e.target.checked,
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
      </label>
      <p>{state.art8Checked.toString()}</p>
    </Box>
  );
};

export const Art9Checked = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;
  return (
    <Box>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Calcular Art 9 Ley 24013?
        <input
          type="checkbox"
          onChange={(e) =>
            dispatch({
              type: "ART9_CHECKED",
              payload: {
                ...state,
                art9Checked: e.target.checked,
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
      </label>
      <p>{state.art9Checked.toString()}</p>
    </Box>
  );
};

export const Art9Inputs = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;
  return (
    <Box>
      <Art9Checked />
      {state.art9Checked && <FechaRegistracion context={context} />}
    </Box>
  );
};

export const Art10Checked = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;
  return (
    <Box>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Calcular Art 10 Ley 24013?
        <input
          type="checkbox"
          onChange={(e) =>
            dispatch({
              type: "ART10_CHECKED",
              payload: {
                ...state,
                art10Checked: e.target.checked,
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
      </label>
      <p>{state.art10Checked.toString()}</p>
    </Box>
  );
};

const Ley24013Inputs = () => {
  return (
    <Box>
      <Art8Checked />
      <Art9Inputs />
      <Art10Checked />
    </Box>
  );
};

export default Ley24013Inputs;
