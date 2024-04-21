interface Indemnización {
  art245: number;
  art232: number;
  sacArt232: number;
  art233: number;
  sacArt233: number;
  diasTrabajados: number;
  vacacionesProporcionales: number;
  sacVacaciones: number;
  sacProporcional: number;
  difSalarales: number;
  horasExtras: number;
  art8: number;
  art9: number;
  art10: number;
  art15: number;
  art80: number;
  art2: number;
}

interface RelacionDeTrabajo {
  fechaInicio: Date;
  fechaFinal: Date;
  salario: number;
  periodo: number;
  art8Checked: boolean;
  art9Checked: boolean;
  art10Checked: boolean;
  art80Checked: boolean;
  difSalarialesChecked: boolean;
  horasExtrasChecked: boolean;
}
interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}
export type { Indemnización, RelacionDeTrabajo, InputChangeEvent };
