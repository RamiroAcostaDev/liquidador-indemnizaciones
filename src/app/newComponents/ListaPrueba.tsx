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
    remuneracionPercibida,
    diferenciasSalariales,
    horasExtras,
    multaArt80,
    multaArt8,
    multaArt9,
  } = contexto;
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"}>
        {/* <p>Remuneracion Devengada {remuneracionDevengada}</p>
        <p>Remuneración Percibida: {remuneracionPercibida}</p>
        <p>Fecha de ingreso: {fechaIngreso.toDateString()}</p>
        <p>Fecha de egreso: {fechaEgreso.toDateString()}</p>
        <p>Periodos: {totalPeriodos}</p> */}
        <p>
          Indemnización por despido (Art. 245): <br />
          {art245}
        </p>
        {art232 !== 0 && (
          <p>
            Indemnización sustitutiva de Preaviso (Art. 232 LCT): <br />
            {art232}
          </p>
        )}
        {sacArt232 !== 0 && (
          <p>
            SAC s/ Preaviso: <br /> {sacArt232}
          </p>
        )}
        {art233 !== 0 && (
          <p>
            Integración Mes Despido (Art. 233 LCT): <br /> {art233}
          </p>
        )}
        {sacArt233 !== 0 && (
          <p>
            SAC s/ Integración Mes Despido: <br /> {sacArt233}
          </p>
        )}
        <p>
          SAC Proporcional: <br /> {sacProporcional}
        </p>
        <p>
          Vacaciones Proporcionales: <br /> {vacacionesProporcionales}
        </p>
        <p>
          SAC s/ Vacaciones Proporcionales: <br /> {sacVacaciones}
        </p>
        <p>
          Días Trabajados Mes en Curso al Distracto: <br />
          {diasTrabajadosMesEnCurso}
        </p>
        {multaArt80 !== 0 && (
          <p>
            Multa Art 80 LCT: <br />
            {multaArt80}
          </p>
        )}
        {diferenciasSalariales !== 0 && (
          <p>
            Diferencias Salariales: <br /> {diferenciasSalariales}
          </p>
        )}
        {horasExtras !== 0 && (
          <p>
            Horas Extras: <br /> {horasExtras}
          </p>
        )}

        {multaArt8 !== 0 && (
          <p>
            Multa Art 8 Ley 24013: <br />
            {multaArt8}
          </p>
        )}

        {multaArt9 !== 0 && (
          <p>
            Multa Art 9 Ley 24013: <br />
            {multaArt9}
          </p>
        )}
      </Box>
    </Container>
  );
};

export default ListaPrueba;
