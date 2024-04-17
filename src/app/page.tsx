"use client";
import { useState } from "react";

import { Box, Container } from "@mui/material";
import moment from "moment";

const defaultDate: Date = new Date();
const defaultSalary: number = 0;
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
interface ButtonClickEvent extends React.MouseEvent<HTMLButtonElement> {}

export default function CompensationLiquidator() {
  const [initialDate, setInitialDate] = useState(defaultDate);
  const [finalDate, setFinalDate] = useState(defaultDate);
  const [salary, setSalary] = useState<number>(defaultSalary);
  const [compensation, setCompensation] = useState<number>(0);

  const handleInitialDateChange = (event: InputChangeEvent) => {
    setInitialDate(new Date(event.target.value));
    console.log(initialDate);
  };

  const handleFinalDateChange = (event: InputChangeEvent) => {
    setFinalDate(new Date(event.target.value));
    console.log(finalDate);
  };

  const handleSalaryChange = (event: InputChangeEvent) => {
    setSalary(Number(event.target.value));
    console.log(salary);
  };

  const calculatePeriod = (a: Date, b: Date): number => {
    let initialDateMoment = moment(a);
    let finalDateMoment = moment(b);
    let diffYears = finalDateMoment.diff(initialDateMoment, "years");
    initialDateMoment.add(diffYears, "years");

    let calculatedPeriod = diffYears;

    let remainingMonths = finalDateMoment.diff(initialDateMoment, "months");
    if (remainingMonths >= 3) {
      calculatedPeriod++;
    }

    if (calculatedPeriod < 1) {
      console.log("La fecha final no puede ser menor a la fecha inicial");
      return 0;
    } else {
      return calculatedPeriod;
    }
  };

  const calculateCompensation = () => {
    let period: number = calculatePeriod(initialDate, finalDate);
    let compensation = period * salary;
    console.log(compensation);
    setCompensation(compensation);
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <h1>Compensation Liquidator</h1>
          <label>
            {" "}
            Salary Input:{" "}
            <input
              type="text"
              onChange={handleSalaryChange}
              style={{ border: "1px solid black", borderRadius: "5px" }}
            />
          </label>
          <label>
            Set Initial Date:{" "}
            <input
              type="date"
              onChange={handleInitialDateChange}
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
          </label>
          <label>
            Set Initial Date:{" "}
            <input
              type="date"
              onChange={handleFinalDateChange}
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
          </label>
          <label>
            Add Penalty <input type="checkbox" />
          </label>

          <h1>Compensation: ${compensation}</h1>
          <button
            onClick={calculateCompensation}
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            Calculate
          </button>
        </Box>
      </Container>
    </>
  );
}
