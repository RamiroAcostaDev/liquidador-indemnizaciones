import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const Art10Checkbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { art10Checked, setArt10Checked } = context;

  const handleArt10CheckedChange = (event: InputChangeEvent) => {
    setArt10Checked(event.target.checked);
    console.log("Art10 checked: ", art10Checked);
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
      Calcular Art 10 Ley 24013?:
      <input
        type="checkbox"
        onChange={handleArt10CheckedChange}
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

export default Art10Checkbox;
