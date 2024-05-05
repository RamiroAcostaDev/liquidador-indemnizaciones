import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const FechaFinalInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { fechaFinal, setFechaFinal } = context;

  const handleFechaFinalChange = (event: InputChangeEvent) => {
    setFechaFinal(new Date(event.target.value));
    console.log("Fecha final: ", fechaFinal);
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
      Fecha Final:
      <input
        type="date"
        onChange={handleFechaFinalChange}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
    </label>
  );
};

export default FechaFinalInput;
