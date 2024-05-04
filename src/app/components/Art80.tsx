import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const Art80 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, art80, setArt80 } = context;
  const calcularArt80 = (salario: number) => {
    let resultadoArt80 = salario * 3;
    setArt80(resultadoArt80);
    console.log("Resultado Art 80:", resultadoArt80);
  };

  useEffect(() => {
    calcularArt80(salario);
  }, [salario]);

  return (
    <li>{art80 > 0 && <p>Art 80 LCT: {formatearNumeroAmoneda(art80)}</p>}</li>
  );
};

export default Art80;
