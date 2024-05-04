import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/FormatNumber";
const SacArt233 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { sacArt233, setSacArt233, art233 } = context;

  const sacSobreArt233 = (art233: number) => {
    let sacSobreArt233 = (art233 * (833 / 100)) / 100;
    setSacArt233(sacSobreArt233);
  };

  useEffect(() => {
    sacSobreArt233(art233);
  }, [art233]);

  return (
    <li>
      {sacArt233 > 0 && <p>SAC Art 233: {formatearNumeroAmoneda(sacArt233)}</p>}
    </li>
  );
};

export default SacArt233;
