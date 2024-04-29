import React, { useEffect, useContext, use } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";

const Art233 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, fechaFinal, art233, setArt233 } = context;

  const calcularArt233 = (salario: number, fechaFinal: Date) => {
    const diasTrabajados = moment(fechaFinal)
      .utcOffset(new Date().getTimezoneOffset())
      .date();
    const diasDelMes = moment(fechaFinal).daysInMonth();
    let indemnizacion233 = 0;
    const salarioPorDia = salario / diasDelMes;
    if (diasTrabajados === diasDelMes) {
      indemnizacion233 = 0;
    } else {
      indemnizacion233 = salarioPorDia * (diasDelMes - diasTrabajados);
    }
    setArt233(indemnizacion233);
  };

  useEffect(() => {
    calcularArt233(salario, fechaFinal);
  }, [salario, fechaFinal]);

  return <li>{art233 > 0 && <p>Art 233: {art233}</p>}</li>;
};

export default Art233;
