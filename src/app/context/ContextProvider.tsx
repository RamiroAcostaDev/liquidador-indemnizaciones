import React, { ReactNode, createContext } from "react";
import { useState } from "react";

export const ContextProvider = createContext<ContextType | undefined>(
  undefined
);

interface ContextType {
  art245: number;
  setArt245: (value: number) => void;
  art232: number;
  setArt232: (value: number) => void;
  sacArt232: number;
  setSacArt232: (value: number) => void;
  art233: number;
  setArt233: (value: number) => void;
  sacArt233: number;
  setSacArt233: (value: number) => void;
  diasTrabajadosMesEnCurso: number;
  setDiasTrabajadosMesEnCurso: (value: number) => void;
  diasDelMes: number;
  setDiasDelMes: (value: number) => void;
  salarioPorDia: number;
  setSalarioPorDia: (value: number) => void;
  vacacionesProporcionales: number;
  setVacacionesProporcionales: (value: number) => void;
  sacSobreVacaciones: number;
  setSacSobreVacaciones: (value: number) => void;
  sacProporcional: number;
  setSacProporcional: (value: number) => void;
  fechaInicial: Date;
  setFechaInicial: (value: Date) => void;
  fechaFinal: Date;
  setFechaFinal: (value: Date) => void;
  salario: number;
  setSalario: (value: number) => void;
  periodo: number;
  setPeriodo: (value: number) => void;
}

interface ContextsProviderProps {
  children: ReactNode;
}

export const ContextsProvider = ({ children }: ContextsProviderProps) => {
  const [art245, setArt245] = useState(0);
  const [art232, setArt232] = useState(0);
  const [sacArt232, setSacArt232] = useState(0);
  const [art233, setArt233] = useState(0);
  const [sacArt233, setSacArt233] = useState(0);
  const [diasTrabajadosMesEnCurso, setDiasTrabajadosMesEnCurso] = useState(0);
  const [diasDelMes, setDiasDelMes] = useState(0);
  const [salarioPorDia, setSalarioPorDia] = useState(0);
  const [vacacionesProporcionales, setVacacionesProporcionales] = useState(0);
  const [sacSobreVacaciones, setSacSobreVacaciones] = useState(0);
  const [sacProporcional, setSacProporcional] = useState(0);

  const [fechaInicial, setFechaInicial] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [salario, setSalario] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  return (
    <ContextProvider.Provider
      value={{
        art245,
        setArt245,
        art232,
        setArt232,
        sacArt232,
        setSacArt232,
        art233,
        setArt233,
        sacArt233,
        setSacArt233,
        diasTrabajadosMesEnCurso,
        setDiasTrabajadosMesEnCurso,
        diasDelMes,
        setDiasDelMes,
        salarioPorDia,
        setSalarioPorDia,
        vacacionesProporcionales,
        setVacacionesProporcionales,
        sacSobreVacaciones,
        setSacSobreVacaciones,
        sacProporcional,
        setSacProporcional,
        fechaInicial,
        setFechaInicial,
        fechaFinal,
        setFechaFinal,
        salario,
        setSalario,
        periodo,
        setPeriodo,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
