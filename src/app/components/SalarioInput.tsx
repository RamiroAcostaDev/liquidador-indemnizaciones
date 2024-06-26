import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const SalarioInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { salario, setSalario } = context;

  const handleSalarioChange = (event: InputChangeEvent) => {
    setSalario(Number(event.target.value));
    console.log("Salario: ", salario);
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
      Remuneracion Devengada:
      <input
        type="number"
        onChange={handleSalarioChange}
        style={{ border: "1px solid black", borderRadius: "5px" }}
      />
    </label>
  );
};

export default SalarioInput;
