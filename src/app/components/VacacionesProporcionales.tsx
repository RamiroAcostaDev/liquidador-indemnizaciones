import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const VacacionesProporcionales = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    salario,
    fechaFinal,
    periodo,
    vacacionesProporcionales,
    setVacacionesProporcionales,
  } = context;

  const CalcularVacacionesProporcionales = (
    salario: number,
    fechaFinal: Date,
    periodoCalculado: number
  ) => {
    const fechaDeDistracto = moment(fechaFinal);
    const diasTrabajadosEnElAnio = fechaDeDistracto.dayOfYear();
    const esAñoBisiesto = fechaDeDistracto.isLeapYear();
    const diasEnElAnio = esAñoBisiesto ? 366 : 365;
    let vacacionesPorAntiguedad = 0;
    if (periodoCalculado <= 5) {
      vacacionesPorAntiguedad = 14;
    } else if (periodoCalculado > 5 && periodoCalculado <= 10) {
      vacacionesPorAntiguedad = 21;
    } else if (periodoCalculado > 10 && periodoCalculado <= 20) {
      vacacionesPorAntiguedad = 28;
    } else {
      vacacionesPorAntiguedad = 35;
    }
    let vacacionesCorrespondientes =
      (diasTrabajadosEnElAnio * vacacionesPorAntiguedad) / diasEnElAnio;
    let vacacionesProporcionales = (salario / 25) * vacacionesCorrespondientes;
    setVacacionesProporcionales(vacacionesProporcionales);
  };
  useEffect(() => {
    CalcularVacacionesProporcionales(salario, fechaFinal, periodo);
  }, [salario, fechaFinal, periodo]);

  return (
    <li>
      {vacacionesProporcionales > 0 && (
        <p>
          Vacaciones Proporcionales:{" "}
          {formatearNumeroAmoneda(vacacionesProporcionales)}
        </p>
      )}
    </li>
  );
};

export default VacacionesProporcionales;
