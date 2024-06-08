import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/Functions";

const Art2Ley25323 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { art245, art232, sacArt232, art233, sacArt233, art2, setArt2 } =
    context;
  const calcularArt2Ley25323 = () => {
    let resultadoArt2Ley225323 =
      (art245 + art232 + sacArt232 + art233 + sacArt233) / 2;
    setArt2(resultadoArt2Ley225323);
    console.log("Resultado Art 2 Ley 25323:", resultadoArt2Ley225323);
  };
  useEffect(() => {
    calcularArt2Ley25323();
  }, [art245, art232, sacArt232, art233, sacArt233]);
  return (
    <li>
      {art2 > 0 && <p>Art 2 Ley 25323: {formatearNumeroAmoneda(art2)}</p>}
    </li>
  );
};

export default Art2Ley25323;
