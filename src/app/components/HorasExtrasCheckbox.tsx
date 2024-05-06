import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const HorasExtrasCheckbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { horasExtrasChecked, setHorasExtrasChecked } = context;

  const handleHorasExtrasCheckedChange = (event: InputChangeEvent) => {
    setHorasExtrasChecked(event.target.checked);

    console.log("HorasExtras checked: ", horasExtrasChecked);
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
      Calcular Horas Extras?:
      <input
        type="checkbox"
        onChange={handleHorasExtrasCheckedChange}
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

export default HorasExtrasCheckbox;
