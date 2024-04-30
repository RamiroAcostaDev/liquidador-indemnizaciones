import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";

const DiferenciasSalariales = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    salarioPercibido,
    salario,
    fechaInicial,
    fechaFinal,
    diferenciasSalariales,
    setDiferenciasSalariales,
  } = context;

  const calcularDiferenciaSalarial = (
    salarioPercibido: number,
    salario: number,
    fechaInicial: Date,
    fechaFinal: Date
  ) => {
    const fechaDeInicio = moment(fechaInicial);
    const fechaDeFinalizacion = moment(fechaFinal);
    const mesesDeDiferencia = fechaDeFinalizacion.diff(fechaDeInicio, "months");
    console.log("meses de diferencia:", mesesDeDiferencia);
    const diferenciaEntreSalarios = salario - salarioPercibido;
    let diferenciasSalariales = 0;
    if (mesesDeDiferencia < 24) {
      diferenciasSalariales = diferenciaEntreSalarios * mesesDeDiferencia;
      console.log("Diferencias Salariales", diferenciasSalariales);
    } else {
      diferenciasSalariales = diferenciaEntreSalarios * 24;
      console.log("Diferencias Salariales", diferenciasSalariales);
    }
    setDiferenciasSalariales(diferenciasSalariales);
  };

  useEffect(() => {
    calcularDiferenciaSalarial(
      salarioPercibido,
      salario,
      fechaInicial,
      fechaFinal
    );
  }, [salarioPercibido, salario, fechaInicial, fechaFinal]);

  return (
    <li>
      {diferenciasSalariales > 0 && (
        <p>Diferencias Salariales: {diferenciasSalariales}</p>
      )}
    </li>
  );
};

export default DiferenciasSalariales;