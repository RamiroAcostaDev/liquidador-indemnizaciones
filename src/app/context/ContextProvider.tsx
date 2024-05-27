import React, { ReactNode, createContext } from "react";
import { useState } from "react";

export const ContextProvider = createContext<ContextType | undefined>(
  undefined
);

interface ContextType {
  //datos ingresados por el usuario
  fechaInicial: Date;
  setFechaInicial: (value: Date) => void;
  fechaFinal: Date;
  setFechaFinal: (value: Date) => void;
  fechaDeRegistracion: Date;
  setFechaDeRegistracion: (value: Date) => void;
  salario: number;
  setSalario: (value: number) => void;
  salarioPercibido: number;
  setSalarioPercibido: (value: number) => void;
  periodo: number;
  salarioRegistrado: number;
  setSalarioRegistrado: (value: number) => void;
  setPeriodo: (value: number) => void;
  preavisoChecked: boolean;
  setPreavisoChecked: (value: boolean) => void;
  art9Checked: boolean;
  setArt9Checked: (value: boolean) => void;

  //estados para indemnizaciones
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
  diferenciasSalariales: number;
  setDiferenciasSalariales: (value: number) => void;
  horasExtras: number;
  setHorasExtras: (value: number) => void;
  horasLaboradasPorDia: number;
  setHorasLaboradasPorDia: (value: number) => void;
  diasTrabajadosPorSemana: number;
  setDiasTrabajadosPorSemana: (value: number) => void;
  jornadaMaximaLegal: number;
  setJornadaMaximaLegal: (value: number) => void;
  art8Checked: boolean;
  setArt8Checked: (value: boolean) => void;
  art10Checked: boolean;
  setArt10Checked: (value: boolean) => void;
  DiferenciasSalarialesChecked: boolean;
  setDiferenciasSalarialesChecked: (value: boolean) => void;
  horasExtrasChecked: boolean;
  setHorasExtrasChecked: (value: boolean) => void;
  art80Checked: boolean;
  setArt80Checked: (value: boolean) => void;
  art1Checked: boolean;
  setArt1Checked: (value: boolean) => void;
  art8: number;
  setArt8: (value: number) => void;
  art9: number;
  setArt9: (value: number) => void;
  art10: number;
  setArt10: (value: number) => void;
  art15: number;
  setArt15: (value: number) => void;
  art1: number;
  setArt1: (value: number) => void;
  art2: number;
  setArt2: (value: number) => void;
  art80: number;
  setArt80: (value: number) => void;
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

  const [vacacionesProporcionales, setVacacionesProporcionales] = useState(0);
  const [sacSobreVacaciones, setSacSobreVacaciones] = useState(0);
  const [sacProporcional, setSacProporcional] = useState(0);
  const [diferenciasSalariales, setDiferenciasSalariales] = useState(0);
  const [horasExtras, setHorasExtras] = useState(0);

  const [art8, setArt8] = useState(0);
  const [art9, setArt9] = useState(0);
  const [art10, setArt10] = useState(0);
  const [art15, setArt15] = useState(0);

  const [art1, setArt1] = useState(0);
  const [art2, setArt2] = useState(0);
  const [art80, setArt80] = useState(0);

  const [preavisoChecked, setPreavisoChecked] = useState(false);
  const [art8Checked, setArt8Checked] = useState(false);
  const [art9Checked, setArt9Checked] = useState(false);
  const [art10Checked, setArt10Checked] = useState(false);
  const [DiferenciasSalarialesChecked, setDiferenciasSalarialesChecked] =
    useState(false);
  const [horasExtrasChecked, setHorasExtrasChecked] = useState(false);
  const [art80Checked, setArt80Checked] = useState(false);
  const [art1Checked, setArt1Checked] = useState(false);

  const [fechaInicial, setFechaInicial] = useState(new Date());
  const [jornadaMaximaLegal, setJornadaMaximaLegal] = useState(0);
  const [horasLaboradasPorDia, setHorasLaboradasPorDia] = useState(0);
  const [diasTrabajadosPorSemana, setDiasTrabajadosPorSemana] = useState(0);
  const [diasDelMes, setDiasDelMes] = useState(0);
  const [salarioPorDia, setSalarioPorDia] = useState(0);
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [fechaDeRegistracion, setFechaDeRegistracion] = useState(new Date());
  const [salario, setSalario] = useState(0);
  const [salarioPercibido, setSalarioPercibido] = useState(0);
  const [salarioRegistrado, setSalarioRegistrado] = useState(0);
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
        fechaDeRegistracion,
        setFechaDeRegistracion,
        salario,
        setSalario,
        salarioPercibido,
        setSalarioPercibido,
        salarioRegistrado,
        setSalarioRegistrado,
        periodo,
        setPeriodo,
        diferenciasSalariales,
        setDiferenciasSalariales,
        horasExtras,
        setHorasExtras,
        horasLaboradasPorDia,
        setHorasLaboradasPorDia,
        diasTrabajadosPorSemana,
        setDiasTrabajadosPorSemana,
        jornadaMaximaLegal,
        setJornadaMaximaLegal,
        art8,
        setArt8,
        art9,
        setArt9,
        art10,
        setArt10,
        art15,
        setArt15,
        art1,
        setArt1,
        art2,
        setArt2,
        art80,
        setArt80,

        preavisoChecked,
        setPreavisoChecked,

        art8Checked,
        setArt8Checked,
        art9Checked,
        setArt9Checked,
        art10Checked,
        setArt10Checked,
        DiferenciasSalarialesChecked,
        setDiferenciasSalarialesChecked,
        horasExtrasChecked,
        setHorasExtrasChecked,
        art80Checked,
        setArt80Checked,
        art1Checked,
        setArt1Checked,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
