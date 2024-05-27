import React from "react";
import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";

const DatosPrincipalesInputs = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch } = context;

  return (
    <Container>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <h2>Datos Principales</h2>
        <Box>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Remuneracion Devengada:
            <input
              type="number"
              onChange={(e) =>
                dispatch({
                  type: "REMUNERACION_DEVENGADA",
                  payload: Number(e.target.value),
                })
              }
              style={{ border: "1px solid black", borderRadius: "5px" }}
            />
          </label>
        </Box>
        <Box>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Fecha Inicial:
            <input
              type="date"
              onChange={(e) =>
                dispatch({
                  type: "FECHA_INGRESO",
                  payload: new Date(e.target.value),
                })
              }
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
          </label>
        </Box>
        <Box>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Fecha de Egreso:
            <input
              type="date"
              onChange={(e) =>
                dispatch({
                  type: "FECHA_EGRESO",
                  payload: new Date(e.target.value),
                })
              }
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
          </label>
        </Box>
        <button
          onClick={() =>
            dispatch({
              type: "CALCULAR",
              payload: 0,
            })
          }
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid black",
            marginTop: "10px",
          }}
        >
          CALCULAR
        </button>
      </Box>
    </Container>
  );
};

export default DatosPrincipalesInputs;
