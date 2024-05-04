import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const DiasTrabajadosMesEnCurso = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const {
    salario,
    fechaFinal,
    diasTrabajadosMesEnCurso,
    setDiasTrabajadosMesEnCurso,
  } = context;

  const CalculardiasTrabajadosMesEnCurso = (
    salario: number,
    fechaFinal: Date
  ) => {
    const diasTrabajados = moment(fechaFinal)
      .utcOffset(new Date().getTimezoneOffset())
      .date();
    console.log("Dias trabajados: ", diasTrabajados);
    const diasDelMes = moment(fechaFinal).daysInMonth();
    console.log("Dias del mes: ", diasDelMes);
    const salarioPorDia = salario / diasDelMes;
    let diasTrabajadosMesEnCurso = salarioPorDia * diasTrabajados;
    setDiasTrabajadosMesEnCurso(diasTrabajadosMesEnCurso);
  };

  useEffect(() => {
    CalculardiasTrabajadosMesEnCurso(salario, fechaFinal);
  }, [salario, fechaFinal]);
  return (
    <li>
      {diasTrabajadosMesEnCurso > 0 && (
        <p>
          Dias Trabajados Mes En Curso:{" "}
          {formatearNumeroAmoneda(diasTrabajadosMesEnCurso)}
        </p>
      )}
    </li>
  );
};

export default DiasTrabajadosMesEnCurso;
