import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const SalarioRegistradoInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { salarioRegistrado, setSalarioRegistrado } = context;

  const handleSalarioRegistradoChange = (event: InputChangeEvent) => {
    setSalarioRegistrado(Number(event.target.value));
    console.log("Salario registrado: ", salarioRegistrado);
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
      Remuneracion Registrada:
      <input
        type="number"
        onChange={handleSalarioRegistradoChange}
        style={{ border: "1px solid black", borderRadius: "5px" }}
      />
    </label>
  );
};

export default SalarioRegistradoInput;
