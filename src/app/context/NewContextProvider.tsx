"use client";
import { createContext, useReducer } from "react";
import moment from "moment";

const DataContext = createContext<ContextType | null>(null);
//Types definitions
interface ContextType extends InitialState {
  dispatch: React.Dispatch<Action>;
}

interface InitialState {
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
}

interface Action {
  type:
    | "REMUNERACION_DEVENGADA"
    | "REMUNERACION_PERCIBIDA"
    | "REMUNERACION_REGISTRADA"
    | "FECHA_INGRESO"
    | "FECHA_EGRESO"
    | "FECHA_REGISTRACION"
    | "CALCULAR";

  payload: number | Date;
}

type DataContextProviderProps = { children: React.ReactNode };

//Initial State
const initialState: InitialState = {
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
      return { ...state, fechaEgreso: new Date(action.payload) };
    case "FECHA_REGISTRACION":
      return { ...state, fechaDeRegistracion: new Date(action.payload) };
    case "CALCULAR":
      return {
        ...state,
        totalPeriodos: calculatePeriod(state.fechaIngreso, state.fechaEgreso),
      };
    default:
      return state;
  }
};

//funcion prueba
const calculatePeriod = (a: Date, b: Date) => {
  let initialDateMoment = moment(a);
  let finalDateMoment = moment(b);
  let diffYears = finalDateMoment.diff(initialDateMoment, "years");
  initialDateMoment.add(diffYears, "years");

  let calculatedPeriod = diffYears;

  let remainingMonths = finalDateMoment.diff(initialDateMoment, "months");
  if (remainingMonths >= 3) {
    calculatedPeriod++;
  }

  if (calculatedPeriod < 1) {
    console.log("La fecha final no puede ser mayor a la fecha inicial");
    calculatedPeriod = 0;
  }
  return calculatedPeriod;
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
