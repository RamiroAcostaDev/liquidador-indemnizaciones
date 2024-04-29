import React, { useEffect, useContext, use } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";

const SacProporcional = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, fechaFinal, sacProporcional, setSacProporcional } = context;

  const calcularSacProporcional = (sueldo: number, fechaFinal: Date) => {
    const fechaDada = moment(fechaFinal);
    const diasTranscurridos = fechaDada.dayOfYear();
    const esAñoBisiesto = fechaDada.isLeapYear();
    const semestre = esAñoBisiesto ? 181 : 180;
    console.log("semestre: ", semestre);
    console.log("dias transcurridos: ", diasTranscurridos);
    let sacProporcional = 0;
    if (diasTranscurridos <= semestre) {
      sacProporcional = (sueldo / 2 / semestre) * diasTranscurridos;
    } else {
      sacProporcional =
        (sueldo / 2 / semestre) * (diasTranscurridos - semestre);
    }
    setSacProporcional(sacProporcional);
  };

  useEffect(() => {
    calcularSacProporcional(salario, fechaFinal);
  }, [salario, fechaFinal]);

  return (
    <li>{sacProporcional > 0 && <p>SAC Proporcional: {sacProporcional}</p>}</li>
  );
};

export default SacProporcional;
