import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const Art9Checkbox = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("Context is undefined");
  }
  const { art9Checked, setArt9Checked } = context;

  const handleArt9CheckedChange = (event: InputChangeEvent) => {
    setArt9Checked(event.target.checked);
    console.log("Art9 checked: ", art9Checked);
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
      Calcular Art 9 Ley 24013?:
      <input
        type="checkbox"
        onChange={handleArt9CheckedChange}
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

export default Art9Checkbox;
