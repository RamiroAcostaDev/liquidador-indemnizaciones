import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const Art1Checkbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { art1Checked, setArt1Checked } = context;
  const handleArt1CheckedChange = (event: InputChangeEvent) => {
    setArt1Checked(event.target.checked);
    console.log("Art1 checked: ", art1Checked);
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
      Calcular Art 1 Ley 25323?:
      <input
        type="checkbox"
        onChange={handleArt1CheckedChange}
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

export default Art1Checkbox;
