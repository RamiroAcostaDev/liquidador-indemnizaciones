import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import formatearNumeroAmoneda from "../helpers/Functions";
const HorasExtras = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    salario,
    horasExtras,
    setHorasExtras,
    horasLaboradasPorDia,
    fechaInicial,
    fechaFinal,
    diasTrabajadosPorSemana,
    jornadaMaximaLegal,
  } = context;

  const calcularHorasExtras = (
    salario: number,
    horasDiarias: number,
    diasLaborados: number,
    jornadaMaxima: number,
    fechaInicial: Date,
    fechaFinal: Date
  ) => {
    if (
      salario === 0 ||
      horasDiarias === 0 ||
      diasLaborados === 0 ||
      jornadaMaxima === 0 ||
      fechaInicial === null ||
      fechaFinal === null
    ) {
      let horasExtrasTotales = 0;
      setHorasExtras(horasExtrasTotales);
    } else {
      const salarioPorHora = salario / (jornadaMaxima * 4);
      console.log("Salario por hora: ", salarioPorHora);
      const valorHoraExtra = salarioPorHora * 1.5;
      console.log("Valor hora extra: ", valorHoraExtra);
      const horasSemanales = horasDiarias * diasLaborados;
      console.log("Horas semanales: ", horasSemanales);
      const fechaDeInicio = moment(fechaInicial);
      const fechaDeFinalizacion = moment(fechaFinal);
      const mesesDeDiferencia = fechaDeFinalizacion.diff(
        fechaDeInicio,
        "months"
      );
      console.log("meses de diferencia:", mesesDeDiferencia);
      let horasExtrasSemanal = 0;
      let horasExtrasMensual = 0;
      let horasExtrasTotales = 0;
      if (horasSemanales <= jornadaMaxima) {
        console.log("No se calculan horas extras");
        setHorasExtras(horasExtras);
      } else {
        const diferenciaHoras = horasSemanales - jornadaMaxima;
        console.log("Diferencia horas: ", diferenciaHoras);
        horasExtrasSemanal = diferenciaHoras * valorHoraExtra;
        console.log("Horas extras: ", horasExtrasSemanal);
        horasExtrasMensual = horasExtrasSemanal * 4;
        console.log("Horas extras mensual: ", horasExtrasMensual);
        if (mesesDeDiferencia < 24) {
          horasExtrasTotales = horasExtrasMensual * mesesDeDiferencia;
          console.log("Horas Extras", horasExtrasTotales);
        } else {
          horasExtrasTotales = horasExtrasMensual * 24;
          console.log("Horas Extras", horasExtrasTotales);
        }
      }

      setHorasExtras(horasExtrasTotales);
    }
  };

  useEffect(() => {
    calcularHorasExtras(
      salario,
      horasLaboradasPorDia,
      diasTrabajadosPorSemana,
      jornadaMaximaLegal,
      fechaInicial,
      fechaFinal
    );
  }, [
    salario,
    horasLaboradasPorDia,
    diasTrabajadosPorSemana,
    jornadaMaximaLegal,
    fechaInicial,
    fechaFinal,
  ]);

  return (
    <li>
      {horasExtras > 0 && (
        <p>Horas Extras : {formatearNumeroAmoneda(horasExtras)}</p>
      )}
    </li>
  );
};

export default HorasExtras;
