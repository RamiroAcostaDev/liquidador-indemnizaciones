import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const Art232 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, periodo, art232, setArt232 } = context;

  const calcularArt232 = (salario: number, periodoCalculado: number) => {
    let salarioPorDia = salario / 30;
    let indemnizacion232 = 0;
    console.log("Periodo: ", periodoCalculado);

    if (periodoCalculado == 1) {
      indemnizacion232 = salarioPorDia * 15;
    }
    if (periodoCalculado > 1 && periodoCalculado <= 5) {
      indemnizacion232 = salarioPorDia * 30;
    }

    if (periodoCalculado > 5) {
      indemnizacion232 = salarioPorDia * 60;
    }
    setArt232(indemnizacion232);
  };
  useEffect(() => {
    calcularArt232(salario, periodo);
  }, [salario, periodo]);

  return (
    <li>{art232 > 0 && <p>Art 232: {formatearNumeroAmoneda(art232)}</p>}</li>
  );
};

export default Art232;
