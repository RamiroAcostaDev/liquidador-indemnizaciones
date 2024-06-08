"use client";
import { createContext, useReducer } from "react";
import {
  calcularArt245,
  calcularArt232,
  sacSobreArt232,
  calcularArt233,
  sacArt233,
  calcularSacProporcional,
  calcularVacacionesProporcionales,
  calcularSacVacaciones,
  calculardiasTrabajadosMesEnCurso,
  calcularPeriodoTotal,
  calcularDiferenciaSalarial,
  calcularHorasExtras,
  calcularArt80,
  calcularArt8Ley24013,
  calcularArt9Ley24013,
  calcularArt10Ley24013,
} from "../helpers/Functions";

const DataContext = createContext<ContextType | null>(null);

//Types definitions
interface ContextType extends InitialState {
  dispatch: React.Dispatch<Action>;
}

interface RemuneracionDevengadaAction {
  type: "REMUNERACION_DEVENGADA";
  payload: { remuneracionDevengada: number };
}

interface RemuneracionPercibidaAction {
  type: "REMUNERACION_PERCIBIDA";
  payload: { remuneracionPercibida: number };
}

interface RemuneracionRegistradaAction {
  type: "REMUNERACION_REGISTRADA";
  payload: { remuneracionRegistrada: number };
}

interface FechaIngresoAction {
  type: "FECHA_INGRESO";
  payload: { fechaIngreso: Date };
}

interface FechaEgresoAction {
  type: "FECHA_EGRESO";
  payload: { fechaEgreso: Date };
}

interface FechaRegistracionAction {
  type: "FECHA_REGISTRACION";
  payload: { fechaRegistracion: Date };
}

interface HorasTrabajadasAction {
  type: "HORAS_TRABAJADAS";
  payload: { horasTrabajadas: number };
}

interface DiasTrabajadosAction {
  type: "DIAS_TRABAJADOS";
  payload: { diasTrabajados: number };
}

interface JornadaCCTAction {
  type: "JORNADA_CCT";
  payload: { jornadaCCT: number };
}

interface PreavisoCheckedAction {
  type: "PREAVISO_CHECKED";
  payload: { preavisoChecked: boolean };
}

interface DiferenciasSalarialesCheckedAction {
  type: "DIFERENCIAS_SALARIALES_CHECKED";
  payload: { diferenciasSalarialesChecked: boolean };
}

interface HorasExtrasCheckedAction {
  type: "HORAS_EXTRAS_CHECKED";
  payload: { horasExtrasChecked: boolean };
}

interface HorasTrabajadasPorDiaAction {
  type: "HORAS_TRABAJADAS_POR_DIA";
  payload: { horasTrabajadasPorDia: number };
}

interface DiasTrabajadosPorSemanaAction {
  type: "DIAS_TRABAJADOS_POR_SEMANA";
  payload: { diasTrabajadosPorSemana: number };
}

interface JornadaCCTAction {
  type: "JORNADA_CCT";
  payload: { jornadaCCT: number };
}

interface Art80CheckedAction {
  type: "ART80_CHECKED";
  payload: { art80Checked: boolean };
}

interface Art8CheckedAction {
  type: "ART8_CHECKED";
  payload: { art8Checked: boolean };
}

interface Art9CheckedAction {
  type: "ART9_CHECKED";
  payload: { art9Checked: boolean };
}

interface Art10CheckedAction {
  type: "ART10_CHECKED";
  payload: { art10Checked: boolean };
}

interface CalcularAction {
  type: "CALCULAR";
}

type Action =
  | RemuneracionDevengadaAction
  | FechaIngresoAction
  | FechaEgresoAction
  | FechaRegistracionAction
  | PreavisoCheckedAction
  | CalcularAction
  | RemuneracionPercibidaAction
  | RemuneracionRegistradaAction
  | HorasTrabajadasAction
  | DiasTrabajadosAction
  | JornadaCCTAction
  | DiferenciasSalarialesCheckedAction
  | HorasExtrasCheckedAction
  | HorasTrabajadasPorDiaAction
  | DiasTrabajadosPorSemanaAction
  | Art80CheckedAction
  | Art8CheckedAction
  | Art9CheckedAction
  | Art10CheckedAction;

interface InitialState {
  //datos principales
  remuneracionDevengada: number;
  remuneracionPercibida: number;
  remuneracionRegistrada: number;
  fechaIngreso: Date;
  fechaEgreso: Date;
  fechaRegistracion: Date;
  totalPeriodos: number;
  horasTrabajadasPorDia: number;
  diasTrabajadosPorSemana: number;
  jornadaCCT: number;
  //Checkbox
  preavisoChecked: boolean;
  art8Checked: boolean;
  art9Checked: boolean;
  art10Checked: boolean;
  diferenciasSalarialesChecked: boolean;
  horasExtrasChecked: boolean;
  art80Checked: boolean;
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
  //multas
  multaArt2: number;
  multaArt80: number;
  multaArt8: number;
  multaArt10: number;
  multaArt9: number;
  multaArt1: number;
  //horas extras
  horasExtras: number;
  //diferencias salariales
  diferenciasSalariales: number;
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
  fechaRegistracion: new Date(),
  totalPeriodos: 0,
  horasTrabajadasPorDia: 0,
  diasTrabajadosPorSemana: 0,
  jornadaCCT: 0,
  //Checkbox
  preavisoChecked: false,
  art8Checked: false,
  art9Checked: false,
  art10Checked: false,
  diferenciasSalarialesChecked: false,
  horasExtrasChecked: false,
  art80Checked: false,
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
  //multas
  multaArt2: 0,
  multaArt80: 0,
  multaArt8: 0,
  multaArt10: 0,
  multaArt9: 0,
  multaArt1: 0,
  //horas extras
  horasExtras: 0,
  //diferencias salariales
  diferenciasSalariales: 0,
};

//Reducer
const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "REMUNERACION_DEVENGADA":
      return {
        ...state,
        remuneracionDevengada: Number(action.payload.remuneracionDevengada),
      };

    case "REMUNERACION_PERCIBIDA":
      return {
        ...state,
        remuneracionPercibida: Number(action.payload.remuneracionPercibida),
      };

    case "REMUNERACION_REGISTRADA":
      return {
        ...state,
        remuneracionRegistrada: Number(action.payload.remuneracionRegistrada),
      };

    case "HORAS_TRABAJADAS_POR_DIA":
      return {
        ...state,
        horasTrabajadasPorDia: action.payload.horasTrabajadasPorDia,
      };

    case "DIAS_TRABAJADOS_POR_SEMANA":
      return {
        ...state,
        diasTrabajadosPorSemana: Number(action.payload.diasTrabajadosPorSemana),
      };
    case "JORNADA_CCT":
      return {
        ...state,
        jornadaCCT: Number(action.payload.jornadaCCT),
      };

    case "FECHA_INGRESO":
      return { ...state, fechaIngreso: action.payload.fechaIngreso };
    case "FECHA_EGRESO":
      return {
        ...state,
        fechaEgreso: action.payload.fechaEgreso,

        totalPeriodos: calcularPeriodoTotal(
          state.fechaIngreso,
          new Date(action.payload.fechaEgreso)
        ),
      };
    case "FECHA_REGISTRACION":
      return {
        ...state,
        fechaRegistracion: action.payload.fechaRegistracion,
      };

    case "PREAVISO_CHECKED":
      return {
        ...state,
        preavisoChecked: action.payload.preavisoChecked,
      };

    case "DIFERENCIAS_SALARIALES_CHECKED":
      return {
        ...state,
        diferenciasSalarialesChecked:
          action.payload.diferenciasSalarialesChecked,
      };
    case "HORAS_EXTRAS_CHECKED":
      return {
        ...state,
        horasExtrasChecked: action.payload.horasExtrasChecked,
      };
    case "ART80_CHECKED":
      return {
        ...state,
        art80Checked: action.payload.art80Checked,
      };
    case "ART8_CHECKED":
      return {
        ...state,
        art8Checked: action.payload.art8Checked,
      };
    case "ART9_CHECKED":
      return {
        ...state,
        art9Checked: action.payload.art9Checked,
      };
    case "ART10_CHECKED":
      return {
        ...state,
        art10Checked: action.payload.art10Checked,
      };

    case "CALCULAR":
      return {
        ...state,

        art245: calcularArt245(
          state.remuneracionDevengada,
          state.totalPeriodos
        ),

        art232: state.preavisoChecked
          ? 0
          : calcularArt232(
              state.remuneracionDevengada,
              state.totalPeriodos,
              state.preavisoChecked
            ),
        sacArt232: state.preavisoChecked
          ? 0
          : sacSobreArt232(
              calcularArt232(
                state.remuneracionDevengada,
                state.totalPeriodos,
                state.preavisoChecked
              )
            ),
        art233: state.preavisoChecked
          ? 0
          : calcularArt233(state.remuneracionDevengada, state.fechaEgreso),
        sacArt233: state.preavisoChecked
          ? 0
          : sacArt233(
              calcularArt233(state.remuneracionDevengada, state.fechaEgreso)
            ),
        sacProporcional: calcularSacProporcional(
          state.remuneracionDevengada,
          state.fechaEgreso
        ),
        vacacionesProporcionales: calcularVacacionesProporcionales(
          state.remuneracionDevengada,
          state.fechaEgreso,
          state.totalPeriodos
        ),
        sacVacaciones: calcularSacVacaciones(
          calcularVacacionesProporcionales(
            state.remuneracionDevengada,
            state.fechaEgreso,
            state.totalPeriodos
          )
        ),
        diasTrabajadosMesEnCurso: calculardiasTrabajadosMesEnCurso(
          state.remuneracionDevengada,
          state.fechaEgreso
        ),
        diferenciasSalariales: state.diferenciasSalarialesChecked
          ? calcularDiferenciaSalarial(
              state.remuneracionPercibida,
              state.remuneracionDevengada,
              state.fechaIngreso,
              state.fechaEgreso
            )
          : 0,
        horasExtras: state.horasExtrasChecked
          ? calcularHorasExtras(
              state.remuneracionDevengada,
              state.horasTrabajadasPorDia,
              state.diasTrabajadosPorSemana,
              state.jornadaCCT,
              state.fechaIngreso,
              state.fechaEgreso
            )
          : 0,
        multaArt80: state.art80Checked
          ? 0
          : calcularArt80(state.remuneracionDevengada),
        multaArt8: state.art8Checked
          ? calcularArt8Ley24013(
              state.remuneracionDevengada,
              state.fechaIngreso,
              state.fechaEgreso
            )
          : 0,
        multaArt9: state.art9Checked
          ? calcularArt9Ley24013(
              state.remuneracionDevengada,
              state.fechaIngreso,
              state.fechaRegistracion
            )
          : 0,

        multaArt10: state.art10Checked
          ? calcularArt10Ley24013(
              state.remuneracionDevengada,
              state.fechaIngreso,
              state.fechaRegistracion
            )
          : 0,
      };

    default:
      return state;
  }
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
