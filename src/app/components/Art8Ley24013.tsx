import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";

const Art8Ley24013 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, fechaInicial, fechaFinal, art8, setArt8 } = context;

  const calcularArt8Ley24013 = (
    salario: number,
    fechaInicial: Date,
    fechaFinal: Date
  ) => {
    const fechaDeInicio = moment(fechaInicial);
    const fechaDeFinalizacion = moment(fechaFinal);
    const mesesDeDiferencia = fechaDeFinalizacion.diff(fechaDeInicio, "months");
    console.log("meses de diferencia:", mesesDeDiferencia);
    let resultadoArt8 = (salario * mesesDeDiferencia) / 4;
    console.log("Art8 Ley 24013", resultadoArt8);
    setArt8(resultadoArt8);
  };
  useEffect(() => {
    calcularArt8Ley24013(salario, fechaInicial, fechaFinal);
  }, [salario, fechaInicial, fechaFinal]);
  return <li>{art8 > 0 && <p>Art 8 Ley 24013: {art8}</p>}</li>;
};

export default Art8Ley24013;
