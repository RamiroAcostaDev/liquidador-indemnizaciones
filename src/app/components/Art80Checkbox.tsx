import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const Art80Checkbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { art80Checked, setArt80Checked } = context;

  const handleArt80CheckedChange = (e: InputChangeEvent) => {
    setArt80Checked(e.target.checked);
    console.log("Art80 checked: ", art80Checked);
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
      Calcular Art 80 LCT?:
      <input
        type="checkbox"
        onChange={handleArt80CheckedChange}
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

export default Art80Checkbox;
