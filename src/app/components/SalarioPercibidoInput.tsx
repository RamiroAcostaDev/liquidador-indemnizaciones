import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const SalarioPercibidoInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { salarioPercibido, setSalarioPercibido } = context;

  const handleSalarioPercibidoChange = (event: InputChangeEvent) => {
    setSalarioPercibido(Number(event.target.value));
    console.log("Salario percibido: ", salarioPercibido);
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
      Remuneracion Percibida:
      <input
        type="number"
        onChange={handleSalarioPercibidoChange}
        style={{ border: "1px solid black", borderRadius: "5px" }}
      />
    </label>
  );
};

export default SalarioPercibidoInput;
