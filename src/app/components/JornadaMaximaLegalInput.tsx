import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
const JornadaMaximaLegalInput = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { jornadaMaximaLegal, setJornadaMaximaLegal } = context;

  const handleJornadaMaximaLegalChange = (event: InputChangeEvent) => {
    setJornadaMaximaLegal(Number(event.target.value));
    console.log("Jornada máxima legal: ", jornadaMaximaLegal);
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
      Jornada maxima semanal CCT:
      <input
        type="number"
        onChange={handleJornadaMaximaLegalChange}
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

export default JornadaMaximaLegalInput;
