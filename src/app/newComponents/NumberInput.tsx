import { Box } from "@mui/material";
import { RemuneracionDevengada } from "./DatosPrincipalesInputs";

export const NumberInput = ({
  context,
  title,
  dispatchType,
  propName,
  dispatch,
}) => {
  /*  const DataContext = '';
 const useContext=()=>{

        return DataContext;
 }   
const title="Remuneracion Devengada";
const dispatchType="REMUNERACION_DEVENGADA";
const propName= remuneracionDevengada; */

  const { ...state } = context;

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
        {title}
        <input
          type="number"
          onChange={(e) =>
            dispatch({
              type: dispatchType,

              payload: {
                ...state,
                remuneracionDevengada: Number(e.target.value),
              },
            })
          }
          style={{ border: "1px solid black", borderRadius: "5px" }}
        />
      </label>
      <p>{propName}</p>
    </Box>
  );
};
