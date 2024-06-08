import React, { useEffect, useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import formatearNumeroAmoneda from "../helpers/Functions";

const Art245 = () => {
  const context = useContext(ContextProvider);

  if (!context) {
    throw new Error("Context is undefined");
  }

  const { salario, periodo, art245, setArt245 } = context;

  const calcularArt245 = (salario: number, periodo: number) => {
    let resultado = periodo * salario;
    setArt245(resultado);
  };

  useEffect(() => {
    calcularArt245(salario, periodo);
  }, [salario, periodo]);

  return (
    <li>
      {art245 > 0 && (
        <p>
          Indemnización por despido (Art. 245): {formatearNumeroAmoneda(art245)}
        </p>
      )}
    </li>
  );
};

export default Art245;
