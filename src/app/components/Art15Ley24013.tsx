import React, { useEffect, useContext, use } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const Art15Ley24013 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const {
    art245,
    art232,
    sacArt232,
    art233,
    sacArt233,
    art15,
    setArt15,
    art8,
    art10,
    art9,
  } = context;

  const calcularArt15Ley24013 = () => {
    if (art245 <= 0) {
      setArt15(0);
    } else if (art8 || art9 || art10) {
      let resultadoArt15Ley24013 =
        art245 + art232 + sacArt232 + art233 + sacArt233;
      setArt15(resultadoArt15Ley24013);
      console.log("Resultado Art 15 Ley 24013:", resultadoArt15Ley24013);
    } else {
      console.log("No se puede calcular Art 15 Ley 24013");
    }
  };
  useEffect(() => {
    calcularArt15Ley24013();
  }, [art245, art232, sacArt232, art233, sacArt233]);
  return (
    <li>
      {art15 > 0 && <p>Art 15 Ley 24013: {formatearNumeroAmoneda(art15)}</p>}
    </li>
  );
};

export default Art15Ley24013;
