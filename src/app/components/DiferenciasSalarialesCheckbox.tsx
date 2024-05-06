import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const DiferenciasSalarialesCheckbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const {
    DiferenciasSalarialesChecked,
    setDiferenciasSalarialesChecked,
    setDiferenciasSalariales,
  } = context;

  const handleDiferenciasSalarialesCheckedChange = (
    event: InputChangeEvent
  ) => {
    setDiferenciasSalarialesChecked(event.target.checked);
    console.log(
      "DiferenciasSalariales checked: ",
      DiferenciasSalarialesChecked
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
      Calcular diferencias salariales?:
      <input
        type="checkbox"
        onChange={handleDiferenciasSalarialesCheckedChange}
        max={48}
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

export default DiferenciasSalarialesCheckbox;
