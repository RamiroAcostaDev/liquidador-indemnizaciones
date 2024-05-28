import { useContext } from "react";
import { DataContext } from "../context/NewContextProvider";
import { Box, Container } from "@mui/material";

const ListaPrueba = () => {
  const contexto = useContext(DataContext);
  if (!contexto) {
    throw new Error("Context is undefined");
  }
  const {
    remuneracionDevengada,
    fechaIngreso,
    fechaEgreso,
    totalPeriodos,
    art245,
    art232,
    sacArt232,
    art233,
    sacArt233,
    sacProporcional,
    vacacionesProporcionales,
    sacVacaciones,
    diasTrabajadosMesEnCurso,
  } = contexto;
  return (
    <Container>
      <Box>
        <p>Remuneracion Devengada {remuneracionDevengada}</p>
        <p>Fecha de ingreso: {fechaIngreso.toDateString()}</p>
        <p>Fecha de egreso: {fechaEgreso.toDateString()}</p>
        <p>Periodos: {totalPeriodos}</p>
        <p>Art 245: {art245}</p>
        <p>Art 232: {art232}</p>
        <p>Sac Art 232: {sacArt232}</p>
        <p>Art 233: {art233}</p>
        <p>Sac Art 233: {sacArt233}</p>
        <p>Sac Proporcional: {sacProporcional}</p>
        <p>Vacaciones Proporcionales: {vacacionesProporcionales}</p>
        <p>Sac Vacaciones: {sacVacaciones}</p>
        <p>Dias Trabajados Mes En Curso: {diasTrabajadosMesEnCurso}</p>
      </Box>
    </Container>
  );
};

export default ListaPrueba;
