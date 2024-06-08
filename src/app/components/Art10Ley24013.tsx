import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import moment from "moment";
import formatearNumeroAmoneda from "../helpers/Functions";
const Art10Ley24013 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    salarioPercibido,
    salarioRegistrado,
    fechaDeRegistracion,
    fechaFinal,
    art10,
    setArt10,
  } = context;
  const calcularArt10Ley24013 = () => {
    const fechaRegistro = moment(fechaDeRegistracion);
    const fechaDistracto = moment(fechaFinal);
    const diasDeDiferencia = fechaDistracto.diff(fechaRegistro, "days");
    console.log("dias de diferencia art 10:", diasDeDiferencia);
    //se puede cambiar a meses. ahora calcula por días de diferencia
    const mesesDeDiferencia = fechaDistracto.diff(fechaRegistro, "months");
    console.log("meses de diferencia art 10:", mesesDeDiferencia);

    let salarioSinRegistrarDiario = (salarioPercibido - salarioRegistrado) / 30;
    console.log("Salario sin registrar diario:", salarioSinRegistrarDiario);
    let resultadoArt10 = (salarioSinRegistrarDiario * diasDeDiferencia) / 4;
    console.log("Resultado Art 10:", resultadoArt10);
    setArt10(resultadoArt10);
  };
  useEffect(() => {
    calcularArt10Ley24013();
  }, [salarioPercibido, salarioRegistrado, fechaDeRegistracion, fechaFinal]);

  return (
    <li>
      {art10 > 0 && <p>Art 10 Ley 24013: {formatearNumeroAmoneda(art10)}</p>}
    </li>
  );
};

export default Art10Ley24013;
