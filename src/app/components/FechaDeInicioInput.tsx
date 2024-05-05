import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const FechaDeInicioInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { fechaInicial, setFechaInicial } = context;

  const handleFechaInicioChange = (event: InputChangeEvent) => {
    setFechaInicial(new Date(event.target.value)),
      console.log("Fecha inicial: ", fechaInicial);
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
      Fecha Inicial:
      <input
        type="date"
        onChange={handleFechaInicioChange}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
    </label>
  );
};

export default FechaDeInicioInput;
