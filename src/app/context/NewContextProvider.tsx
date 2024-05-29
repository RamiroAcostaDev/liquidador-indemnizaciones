"use client";
import { createContext, useReducer } from "react";
import moment from "moment";

const DataContext = createContext<ContextType | null>(null);
//Types definitions
interface ContextType extends InitialState {
  dispatch: React.Dispatch<Action>;
}

interface InitialState {
  //datos principales
  remuneracionDevengada: number;
  remuneracionPercibida: number;
  remuneracionRegistrada: number;
  fechaIngreso: Date;
  fechaEgreso: Date;
  fechaDeRegistracion: Date;
  totalPeriodos: number;
  horasTrabajadas: number;
  diasTrabajados: number;
  jornadaCCT: number;
  //Checkbox
  preavisoChecked: boolean;
  //indemnizaciones
  art245: number;
  art232: number;
  sacArt232: number;
  art233: number;
  sacArt233: number;
  sacProporcional: number;
  vacacionesProporcionales: number;
  sacVacaciones: number;
  diasTrabajadosMesEnCurso: number;
}

interface Action {
  type:
    | "REMUNERACION_DEVENGADA"
    | "REMUNERACION_PERCIBIDA"
    | "REMUNERACION_REGISTRADA"
    | "FECHA_INGRESO"
    | "FECHA_EGRESO"
    | "FECHA_REGISTRACION"
    | "CALCULAR"
    | "PREAVISO_CHECKED";

  payload: number | Date;
}

type DataContextProviderProps = { children: React.ReactNode };

//Initial State
const initialState: InitialState = {
  //datos principales
  remuneracionDevengada: 0,
  remuneracionPercibida: 0,
  remuneracionRegistrada: 0,
  fechaIngreso: new Date(),
  fechaEgreso: new Date(),
  fechaDeRegistracion: new Date(),
  totalPeriodos: 0,
  horasTrabajadas: 0,
  diasTrabajados: 0,
  jornadaCCT: 0,
  //Checkbox
  preavisoChecked: false,
  //indemnizaciones
  art245: 0,
  art232: 0,
  sacArt232: 0,
  art233: 0,
  sacArt233: 0,
  sacProporcional: 0,
  vacacionesProporcionales: 0,
  sacVacaciones: 0,
  diasTrabajadosMesEnCurso: 0,
};

//Reducer
const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "REMUNERACION_DEVENGADA":
      return { ...state, remuneracionDevengada: Number(action.payload) };
    case "REMUNERACION_PERCIBIDA":
      return { ...state, remuneracionPercibida: Number(action.payload) };
    case "REMUNERACION_REGISTRADA":
      return { ...state, remuneracionRegistrada: Number(action.payload) };
    case "FECHA_INGRESO":
      return { ...state, fechaIngreso: new Date(action.payload) };
    case "FECHA_EGRESO":
      return {
        ...state,
        fechaEgreso: new Date(action.payload),
        totalPeriodos: calcularPeriodoTotal(
          state.fechaIngreso,
          new Date(action.payload)
        ),
      };
    case "FECHA_REGISTRACION":
      return { ...state, fechaDeRegistracion: new Date(action.payload) };

    case "PREAVISO_CHECKED":
      return { ...state, preavisoChecked: !state.preavisoChecked };
    case "CALCULAR":
      return {
        ...state,

        art245: calcularArt245(
          state.remuneracionDevengada,
          state.totalPeriodos
        ),
        art232: calcularArt232(
          state.remuneracionDevengada,
          state.totalPeriodos,
          state.preavisoChecked
        ),
        sacArt232: sacSobreArt232(
          calcularArt232(
            state.remuneracionDevengada,
            state.totalPeriodos,
            state.preavisoChecked
          )
        ),
        art233: calcularArt233(
          state.remuneracionDevengada,
          state.fechaEgreso,
          state.preavisoChecked
        ),
        sacArt233: sacArt233(
          calcularArt233(
            state.remuneracionDevengada,
            state.fechaEgreso,
            state.preavisoChecked
          )
        ),
        sacProporcional: calcularSacProporcional(
          state.remuneracionDevengada,
          state.fechaEgreso
        ),
        vacacionesProporcionales: CalcularVacacionesProporcionales(
          state.remuneracionDevengada,
          state.fechaEgreso,
          state.totalPeriodos
        ),
        sacVacaciones: CalcularSacVacaciones(
          CalcularVacacionesProporcionales(
            state.remuneracionDevengada,
            state.fechaEgreso,
            state.totalPeriodos
          )
        ),
        diasTrabajadosMesEnCurso: CalculardiasTrabajadosMesEnCurso(
          state.remuneracionDevengada,
          state.fechaEgreso
        ),
      };
    default:
      return state;
  }
};

//calcular periodo
const calcularPeriodoTotal = (fechaInicial: Date, fechaFinal: Date) => {
  let initialDateMoment = moment(fechaInicial);
  let finalDateMoment = moment(fechaFinal);
  let diffYears = finalDateMoment.diff(initialDateMoment, "years");
  initialDateMoment.add(diffYears, "years");

  let calcularPeriodo = diffYears;

  let remainingMonths = finalDateMoment.diff(initialDateMoment, "months");
  if (remainingMonths >= 3) {
    calcularPeriodo++;
  }

  if (calcularPeriodo < 1) {
    console.log("La fecha final no puede ser mayor a la fecha inicial");
    calcularPeriodo = 0;
  }
  return calcularPeriodo;
};

//calcular art 245
const calcularArt245 = (remuneracion: number, periodo: number) => {
  let resultado = periodo * remuneracion;
  return resultado;
};
//calcular art 232
const calcularArt232 = (
  remuneracion: number,
  periodo: number,
  preavisoChecked: boolean
) => {
  let salarioPorDia = remuneracion / 30;
  let indemnizacion232 = 0;
  if (preavisoChecked === true) {
    return (indemnizacion232 = 0);
  } else {
    if (periodo == 1) {
      indemnizacion232 = salarioPorDia * 15;
    }
    if (periodo > 1 && periodo <= 5) {
      indemnizacion232 = salarioPorDia * 30;
    }
    if (periodo > 5) {
      indemnizacion232 = salarioPorDia * 60;
    }
    return indemnizacion232;
  }
};

const sacSobreArt232 = (art232: number) => {
  let sacArt232 = (art232 * (833 / 100)) / 100;
  return sacArt232;
};
//art 233
const calcularArt233 = (
  remuneracion: number,
  fechaFinal: Date,
  preavisoChecked: boolean
) => {
  let indemnizacion233 = 0;
  if (preavisoChecked === true) {
    return (indemnizacion233 = 0);
  } else {
    const diasTrabajados = moment(fechaFinal)
      .utcOffset(new Date().getTimezoneOffset())
      .date();
    const diasDelMes = moment(fechaFinal).daysInMonth();
    let indemnizacion233 = 0;
    const salarioPorDia = remuneracion / diasDelMes;
    if (diasTrabajados === diasDelMes) {
      indemnizacion233 = 0;
    } else {
      indemnizacion233 = salarioPorDia * (diasDelMes - diasTrabajados);
    }
    return indemnizacion233;
  }
};

const sacArt233 = (art233: number) => {
  let sacSobreArt233 = (art233 * (833 / 100)) / 100;
  return sacSobreArt233;
};

//Sac Proporcional
const calcularSacProporcional = (remuneracion: number, fechaFinal: Date) => {
  const fechaDada = moment(fechaFinal);
  const diasTranscurridos = fechaDada.dayOfYear();
  const esAñoBisiesto = fechaDada.isLeapYear();
  const semestre = esAñoBisiesto ? 181 : 180;
  let sacProporcional = 0;
  if (diasTranscurridos <= semestre) {
    sacProporcional = (remuneracion / 2 / semestre) * diasTranscurridos;
  } else {
    sacProporcional =
      (remuneracion / 2 / semestre) * (diasTranscurridos - semestre);
  }
  return sacProporcional;
};

//Vacaciones proporcionales
const CalcularVacacionesProporcionales = (
  remuneracion: number,
  fechaFinal: Date,
  periodo: number
) => {
  const fechaDeDistracto = moment(fechaFinal);
  const diasTrabajadosEnElAnio = fechaDeDistracto.dayOfYear();
  const esAñoBisiesto = fechaDeDistracto.isLeapYear();
  const diasEnElAnio = esAñoBisiesto ? 366 : 365;
  let vacacionesPorAntiguedad = 0;
  if (periodo <= 5) {
    vacacionesPorAntiguedad = 14;
  } else if (periodo > 5 && periodo <= 10) {
    vacacionesPorAntiguedad = 21;
  } else if (periodo > 10 && periodo <= 20) {
    vacacionesPorAntiguedad = 28;
  } else {
    vacacionesPorAntiguedad = 35;
  }
  let vacacionesCorrespondientes =
    (diasTrabajadosEnElAnio * vacacionesPorAntiguedad) / diasEnElAnio;
  let vacacionesProporcionales =
    (remuneracion / 25) * vacacionesCorrespondientes;
  return vacacionesProporcionales;
};

const CalcularSacVacaciones = (vacacionesProporcionales: number) => {
  let sacSobreVacaciones = (vacacionesProporcionales * (833 / 100)) / 100;
  return sacSobreVacaciones;
};

//Dias trabajados en el mes en curso
const CalculardiasTrabajadosMesEnCurso = (
  remuneracion: number,
  fechaFinal: Date
) => {
  const diasTrabajados = moment(fechaFinal)
    .utcOffset(new Date().getTimezoneOffset())
    .date();
  console.log("Dias trabajados: ", diasTrabajados);
  const diasDelMes = moment(fechaFinal).daysInMonth();
  console.log("Dias del mes: ", diasDelMes);
  const salarioPorDia = remuneracion / diasDelMes;
  let diasTrabajadosMesEnCurso = salarioPorDia * diasTrabajados;
  return diasTrabajadosMesEnCurso;
};

//Context Provider
const NewContextProvider = ({ children }: DataContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { NewContextProvider };
export { DataContext };
