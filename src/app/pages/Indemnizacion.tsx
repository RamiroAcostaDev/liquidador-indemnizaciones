import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { Box } from "@mui/material";
import Art245 from "../components/Art245";
import Art232 from "../components/Art232";
import SacArt232 from "../components/SacArt232";
import Art233 from "../components/Art233";
import SacArt233 from "../components/SacArt233";
import DiasTrabajadosMesEnCurso from "../components/DiasTrabajadosMesEnCurso";
import SacProporcional from "../components/SacProporcional";
import VacacionesProporcionales from "../components/VacacionesProporcionales";
import SacVacacionesProporcionales from "../components/SacVacacionesProporcionales";
import HorasExtras from "../components/HorasExtras";
import DiferenciasSalariales from "../components/DiferenciasSalariales";
import Art8Ley24013 from "../components/Art8Ley24013";
import Art15Ley24013 from "../components/Art15Ley24013";
import Art2Ley25323 from "../components/Art2Ley25323";
import Art9Ley24013 from "../components/Art9Ley24013";
import Art10Ley24013 from "../components/Art10Ley24013";
import Art80 from "../components/Art80";
import Art1Ley25323 from "../components/Art1Ley25323";

const IndemnizacionPorAntiguedad = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const {
    preavisoChecked,
    horasExtrasChecked,
    DiferenciasSalarialesChecked,
    art8Checked,
    art9Checked,
    art10Checked,
    art80Checked,
    art1Checked,
  } = context;

  return (
    <Box>
      <h1>Indemnización por antiguedad</h1>
      <ul>
        <Art245 />
        {preavisoChecked && <Art232 />}
        {preavisoChecked && <SacArt232 />}
        {preavisoChecked && <Art233 />}
        {preavisoChecked && <SacArt233 />}
        <DiasTrabajadosMesEnCurso />
        <SacProporcional />
        <VacacionesProporcionales />
        <SacVacacionesProporcionales />
      </ul>
      <h1>Multas</h1>
      <ul>
        <Art2Ley25323 />
        {horasExtrasChecked && <HorasExtras />}
        {DiferenciasSalarialesChecked && <DiferenciasSalariales />}
        {art8Checked && <Art8Ley24013 />}
        {art9Checked && <Art9Ley24013 />}
        {art10Checked && <Art10Ley24013 />}
        {art8Checked && <Art15Ley24013 />}
        {art1Checked && <Art1Ley25323 />}
        {art80Checked && <Art80 />}
      </ul>
    </Box>
  );
};

export default IndemnizacionPorAntiguedad;
