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
        <p>Indemnización por despido (Art. 245): {art245}</p>
        {art232 !== 0 && (
          <p>Indemnización sustitutiva de Preaviso (Art. 232 LCT): {art232}</p>
        )}
        {sacArt232 !== 0 && <p>SAC s/ Preaviso: {sacArt232}</p>}
        {art233 !== 0 && (
          <p>Integración Mes Despido (Art. 233 LCT): {art233}</p>
        )}
        {sacArt233 !== 0 && <p>SAC s/ Integración Mes Despido: {sacArt233}</p>}
        <p>SAC Proporcional: {sacProporcional}</p>
        <p>Vacaciones Proporcionales: {vacacionesProporcionales}</p>
        <p>SAC s/ Vacaciones Proporcionales: {sacVacaciones}</p>
        <p>
          Días Trabajados Mes en Curso al Distracto: {diasTrabajadosMesEnCurso}
        </p>
      </Box>
    </Container>
  );
};

export default ListaPrueba;
