import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const HorasTrabajadasPorDiaInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { horasLaboradasPorDia, setHorasLaboradasPorDia } = context;

  const handleHorasLaboradasPorDiaChange = (event: InputChangeEvent) => {
    setHorasLaboradasPorDia(Number(event.target.value));
    console.log("Horas laboradas por día: ", horasLaboradasPorDia);
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
      Horas diarias trabajadas:
      <input
        type="number"
        onChange={handleHorasLaboradasPorDiaChange}
        max={24}
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

export default HorasTrabajadasPorDiaInput;
