import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const DiasTrabajadosPorSemanaInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { diasTrabajadosPorSemana, setDiasTrabajadosPorSemana } = context;

  const handleDiasTrabajadosPorSemanaChange = (event: InputChangeEvent) => {
    setDiasTrabajadosPorSemana(Number(event.target.value));
    console.log(
      "Cantidad de días trabajados por semana: ",
      diasTrabajadosPorSemana
    );
  };

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Días trabajados en la semana:
      <input
        type="number"
        onChange={handleDiasTrabajadosPorSemanaChange}
        max={7}
        min={1}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
    </label>
  );
};

export default DiasTrabajadosPorSemanaInput;
