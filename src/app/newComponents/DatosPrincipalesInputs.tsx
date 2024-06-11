import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";
import { DatosPrincipales } from "../pages/DatosPrincipales";
import { DiferenciasSalariales } from "../pages/DiferenciasSalariales";
import { HorasExtras } from "../pages/HorasExtras";

// export const RemuneracionDevengada = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("Context is undefined");
//   }

//   const { dispatch, ...state } = context;
//   return (
//     <Box>
//       <label
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         Remuneracion Devengada:
//         <input
//           type="number"
//           onChange={(e) =>
//             dispatch({
//               type: "REMUNERACION_DEVENGADA",

//               payload: {
//                 ...state,
//                 remuneracionDevengada: Number(e.target.value),
//               },
//             })
//           }
//           style={{ border: "1px solid black", borderRadius: "5px" }}
//         />
//       </label>
//       <p>{state.remuneracionDevengada}</p>
//     </Box>
//   );
// };

// export const FechaIngreso = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("Context is undefined");
//   }

//   const { dispatch, ...state } = context;
//   return (
//     <Box>
//       <label
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         Fecha Inicial:
//       </label>
//       <input
//         type="date"
//         onChange={(e) =>
//           dispatch({
//             type: "FECHA_INGRESO",
//             payload: {
//               ...state,

//               fechaIngreso: new Date(e.target.value),
//             },
//           })
//         }
//         style={{
//           border: "1px solid black",
//           borderRadius: "5px",
//           padding: "5px",
//         }}
//       />
//     </Box>
//   );
// };

// export const FechaEgreso = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("Context is undefined");
//   }

//   const { dispatch, ...state } = context;
//   return (
//     <Box>
//       <label
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         Fecha de Egreso:
//         <input
//           type="date"
//           onChange={(e) =>
//             dispatch({
//               type: "FECHA_EGRESO",

//               payload: {
//                 ...state,
//                 fechaEgreso: new Date(e.target.value),
//               },
//             })
//           }
//           style={{
//             border: "1px solid black",
//             borderRadius: "5px",
//             padding: "5px",
//           }}
//         />
//       </label>
//     </Box>
//   );
// };

// export const PreavisoCheckbox = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("Context is undefined");
//   }

//   const { dispatch, ...state } = context;
//   return (
//     <Box>
//       <label
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         Hubo preaviso?
//         <input
//           type="checkbox"
//           onChange={(e) =>
//             dispatch({
//               type: "PREAVISO_CHECKED",

//               payload: { ...state, preavisoChecked: e.target.checked },
//             })
//           }
//           max={48}
//           min={1}
//           style={{
//             border: "1px solid black",
//             borderRadius: "5px",
//             padding: "5px",
//           }}
//         />
//       </label>
//       <p>{state.preavisoChecked.toString()}</p>
//     </Box>
//   );
// };

export const CalcularButton = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { dispatch, ...state } = context;
  return (
    <button
      onClick={() =>
        dispatch({
          type: "CALCULAR",
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
  );
};

// export const Art80 = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("Context is undefined");
//   }

//   const { dispatch, ...state } = context;
//   return (
//     <Box>
//       <label
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         Se entregaron los Certificados de Trabajo?:
//         <input
//           type="checkbox"
//           onChange={(e) =>
//             dispatch({
//               type: "ART80_CHECKED",

//               payload: { ...state, art80Checked: e.target.checked },
//             })
//           }
//           style={{
//             border: "1px solid black",
//             borderRadius: "5px",
//             padding: "5px",
//           }}
//         />
//       </label>
//       <p>{state.art80Checked.toString()}</p>
//     </Box>
//   );
// };

const DatosPrincipalesInputs = () => {
  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} gap={1}>
        <DatosPrincipales />
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <DiferenciasSalariales />
          <HorasExtras />
        </Box>
      </Box>

      <CalcularButton />
    </Box>
  );
};

export default DatosPrincipalesInputs;
