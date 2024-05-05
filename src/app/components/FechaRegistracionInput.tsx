import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const FechaRegistracionInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { fechaDeRegistracion, setFechaDeRegistracion } = context;

  const handleFechaDeRegistracionChange = (event: InputChangeEvent) => {
    setFechaDeRegistracion(new Date(event.target.value));
    console.log("Fecha de registración: ", fechaDeRegistracion);
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
      Fecha De Registracion:
      <input
        type="date"
        onChange={handleFechaDeRegistracionChange}
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "5px",
        }}
      />
    </label>
  );
};

export default FechaRegistracionInput;
