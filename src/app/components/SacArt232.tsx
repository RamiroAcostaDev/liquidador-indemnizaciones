import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/FormatNumber";

const SacArt232 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { art232, sacArt232, setSacArt232 } = context;

  const sacSobreArt232 = (art232: number) => {
    let sacSobreArt232 = (art232 * (833 / 100)) / 100;
    setSacArt232(sacSobreArt232);
  };

  useEffect(() => {
    sacSobreArt232(art232);
  }, [art232]);

  return (
    <li>
      {sacArt232 > 0 && <p>SAC Art 232: {formatearNumeroAmoneda(sacArt232)}</p>}
    </li>
  );
};

export default SacArt232;
