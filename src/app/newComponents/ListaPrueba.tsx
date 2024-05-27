import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";
import { Box, Container } from "@mui/material";

const ListaPrueba = () => {
  const contexto = useContext(DataContext);
  if (!contexto) {
    throw new Error("Context is undefined");
  }
  const { remuneracionDevengada, fechaIngreso, fechaEgreso, totalPeriodos } =
    contexto;
  return (
    <Container>
      <Box>
        <p>Remuneracion Devengada {remuneracionDevengada}</p>
        <p>Fecha de ingreso: {fechaIngreso.toDateString()}</p>
        <p>Fecha de egreso: {fechaEgreso.toDateString()}</p>
        <p>Periodos: {totalPeriodos}</p>
      </Box>
    </Container>
  );
};

export default ListaPrueba;
