import React, { useEffect, useContext, use } from "react";
import { ContextProvider } from "../context/ContextProvider";

const SacVacacionesProporcionales = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const {
    vacacionesProporcionales,
    sacSobreVacaciones,
    setSacSobreVacaciones,
  } = context;

  const SacSobreVacaciones = (vacacionesProporcionales: number) => {
    let sacSobreVacaciones = (vacacionesProporcionales * (833 / 100)) / 100;
    setSacSobreVacaciones(sacSobreVacaciones);
  };
  useEffect(() => {
    SacSobreVacaciones(vacacionesProporcionales);
  }, [vacacionesProporcionales]);

  return (
    <li>
      {sacSobreVacaciones > 0 && (
        <p>SAC Vacaciones Proporcionales: {sacSobreVacaciones}</p>
      )}
    </li>
  );
};

export default SacVacacionesProporcionales;
