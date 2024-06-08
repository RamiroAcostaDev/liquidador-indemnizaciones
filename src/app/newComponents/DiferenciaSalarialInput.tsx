import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";

export const DiferenciasSalarialesChecked = () => {
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
          Calcular diferencias salariales?
        </Typography>
      </label>
      <input
        type="checkbox"
        onChange={(e) =>
          dispatch({
            type: "DIFERENCIAS_SALARIALES_CHECKED",
            payload: {
              ...state,
              diferenciasSalarialesChecked: e.target.checked,
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
        {state.diferenciasSalarialesChecked.toString()}
      </Typography>
    </Box>
  );
};

export const RemuneracionPercibida = () => {
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
          Remuneracion Percibida:
        </Typography>
      </label>

      <input
        type="number"
        onChange={(e) =>
          dispatch({
            type: "REMUNERACION_PERCIBIDA",

            payload: {
              ...state,
              remuneracionPercibida: Number(e.target.value),
            },
          })
        }
        style={{ border: "1px solid black", borderRadius: "5px" }}
      />
    </Box>
  );
};

export const DiferenciaSalarialInput = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;
  return (
    <Box>
      <DiferenciasSalarialesChecked />
      {state.diferenciasSalarialesChecked && <RemuneracionPercibida />}
    </Box>
  );
};
