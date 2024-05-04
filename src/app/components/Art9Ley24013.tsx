import React, { useEffect, useContext, use } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const Art9Ley24013 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, fechaInicial, fechaDeRegistracion, art9, setArt9 } = context;
  const calcularArt9Ley24013 = () => {
    const fechaDeInicio = moment(fechaInicial);
    const fechaDeRegistracionMoment = moment(fechaDeRegistracion);
    const diasDeDiferencia = fechaDeRegistracionMoment.diff(
      fechaDeInicio,
      "days"
    );
    console.log("dias de diferencia:", diasDeDiferencia);
    let salarioDiario = salario / 30;
    console.log("Salario diario:", salarioDiario);
    let resultadoArt9 = (salarioDiario * diasDeDiferencia) / 4;
    setArt9(resultadoArt9);
    console.log("Art9 Ley 24013", resultadoArt9);
  };
  useEffect(() => {
    calcularArt9Ley24013();
  }, [salario, fechaInicial, fechaDeRegistracion]);
  return (
    <li>
      {art9 > 0 && <p>Art 9 Ley 24013: {formatearNumeroAmoneda(art9)}</p>}
    </li>
  );
};

export default Art9Ley24013;
