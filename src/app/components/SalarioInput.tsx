import React, { useEffect, useContext } from "react";
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

  return <div>SalarioInput</div>;
};

export default SalarioInput;
