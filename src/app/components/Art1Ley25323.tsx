import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/Functions";

const Art1Ley25323 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { art245, art232, sacArt232, art233, sacArt233, art1, setArt1 } =
    context;
  const calcularArt1Ley25323 = () => {
    let resultadoArt1Ley225323 =
      art245 + art232 + sacArt232 + art233 + sacArt233;
    setArt1(resultadoArt1Ley225323);
    console.log("Resultado Art 1 Ley 25323:", resultadoArt1Ley225323);
  };
  useEffect(() => {
    calcularArt1Ley25323();
  }, [art245, art232, sacArt232, art233, sacArt233]);
  return (
    <li>
      {art1 > 0 && <p>Art 1 Ley 25323: {formatearNumeroAmoneda(art1)}</p>}
    </li>
  );
};

export default Art1Ley25323;
