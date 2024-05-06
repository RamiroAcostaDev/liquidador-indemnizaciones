import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
const Art8Checkbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { art8Checked, setArt8Checked } = context;
  const handleArt8CheckedChange = (event: InputChangeEvent) => {
    setArt8Checked(event.target.checked);
    console.log("Art8 checked: ", art8Checked);
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
      Calcular Art 8 Ley 24013?:
      <input
        type="checkbox"
        onChange={handleArt8CheckedChange}
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

export default Art8Checkbox;
