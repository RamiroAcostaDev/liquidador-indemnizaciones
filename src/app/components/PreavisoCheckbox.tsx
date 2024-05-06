import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const PreavisoCheckbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { preavisoChecked, setPreavisoChecked } = context;

  const handlePreavisoCheckedChange = (event: InputChangeEvent) => {
    setPreavisoChecked(event.target.checked);
    console.log("Preaviso checked: ", preavisoChecked);
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
      Calcular preaviso?:
      <input
        type="checkbox"
        onChange={handlePreavisoCheckedChange}
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

export default PreavisoCheckbox;
