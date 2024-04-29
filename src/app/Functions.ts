// import moment from "moment";
//Calcula el periodo de tiempo entre la fecha de inicio y la fecha final de la relación de trabajo
// const calculatePeriod = (a: Date, b: Date): number => {
//   let initialDateMoment = moment(a);
//   let finalDateMoment = moment(b);
//   let diffYears = finalDateMoment.diff(initialDateMoment, "years");
//   initialDateMoment.add(diffYears, "years");

//   let calculatedPeriod = diffYears;

//   let remainingMonths = finalDateMoment.diff(initialDateMoment, "months");
//   if (remainingMonths > 3) {
//     calculatedPeriod++;
//   }

//   if (calculatedPeriod < 1) {
//     console.log("La fecha final no puede ser mayor a la fecha inicial");
//     return 0;
//   } else {
//     return calculatedPeriod;
//   }
// };
//Calcula la indemnización por el artículo 245 de la LCT
// const calcularArt245 = (
//   salario: number,

//   periodoCalculado: number
// ) => {
//   let indemnizacion245 = periodoCalculado * salario;

//   return indemnizacion245;
// };
//Calcula la indemnización por el artículo 232 de la LCT
// const calcularArt232 = (salario: number, periodoCalculado: number) => {
//   let salarioPorDia = salario / 30;

//   console.log("Periodo: ", periodoCalculado);
//   if (periodoCalculado <= 1) {
//     let indemnizacion232 = salarioPorDia * 15;

//     return indemnizacion232;
//   } else if (periodoCalculado > 1 && periodoCalculado <= 5) {
//     let indemnizacion232 = salarioPorDia * 30;
//     return indemnizacion232;
//   } else {
//     let indemnizacion232 = salarioPorDia * 60;
//     return indemnizacion232;
//   }
// };
//Calcula el SAC sobre la indemnización por el artículo 232 de la LCT
// const sacSobreArt232 = (salario: number, periodoCalculado: number) => {
//   let resultadoArt232 = calcularArt232(salario, periodoCalculado);
//   let sacSobreArt232 = (resultadoArt232 * (833 / 100)) / 100;
//   return sacSobreArt232;
// };
//Calcula la indemnización por el artículo 233 de la LCT
// const calcularArt233 = (salario: number, fechaFinal: Date) => {
//   const diasTrabajados = moment(fechaFinal)
//     .utcOffset(new Date().getTimezoneOffset())
//     .date();
//   const diasDelMes = moment(fechaFinal).daysInMonth();
//   const salarioPorDia = salario / diasDelMes;
//   if (diasTrabajados === diasDelMes) {
//     let indemnizacion233 = 0;
//     return indemnizacion233;
//   } else {
//     let indemnizacion233 = salarioPorDia * (diasDelMes - diasTrabajados);

//     return indemnizacion233;
//   }
// };
//Calcula el SAC sobre la indemnización por el artículo 233 de la LCT
// const sacSobreArt233 = (
//   salario: number,

//   fechaFinal: Date
// ) => {
//   let resultadoArt233 = calcularArt233(salario, fechaFinal);
//   let sacSobreArt233 = (resultadoArt233 * (833 / 100)) / 100;
//   return sacSobreArt233;
// };
//Calcula el salario adeudado en función de los días trabajados en el mes en curso
// const diasTrabajadosMesEnCurso = (salario: number, fechaFinal: Date) => {
//   const diasTrabajados = moment(fechaFinal)
//     .utcOffset(new Date().getTimezoneOffset())
//     .date();
//   console.log("Dias trabajados: ", diasTrabajados);
//   const diasDelMes = moment(fechaFinal).daysInMonth();
//   console.log("Dias del mes: ", diasDelMes);
//   const salarioPorDia = salario / diasDelMes;
//   let diasTrabajadosMesEnCurso = salarioPorDia * diasTrabajados;
//   return diasTrabajadosMesEnCurso;
// };
//Calcula el SAC proporcional
// const calcularSacProporcional = (sueldo: number, fecha: Date) => {
//   const fechaDada = moment(fecha);
//   const diasTranscurridos = fechaDada.dayOfYear();
//   const esAñoBisiesto = fechaDada.isLeapYear();
//   const semestre = esAñoBisiesto ? 181 : 180;
//   console.log("semestre: ", semestre);
//   console.log("dias transcurridos: ", diasTranscurridos);
//   if (diasTranscurridos <= semestre) {
//     const sacProporcional = (sueldo / 2 / semestre) * diasTranscurridos;
//     return sacProporcional;
//   } else {
//     const sacProporcional =
//       (sueldo / 2 / semestre) * (diasTranscurridos - semestre);
//     return sacProporcional;
//   }
// };
//Calcula las vacaciones proporcionales
// const vacacionesProporcionales = (
//   salario: number,
//   fechaFinal: Date,
//   periodoCalculado: number
// ) => {
//   const fechaDeDistracto = moment(fechaFinal);
//   const diasTrabajadosEnElAnio = fechaDeDistracto.dayOfYear();
//   const esAñoBisiesto = fechaDeDistracto.isLeapYear();
//   const diasEnElAnio = esAñoBisiesto ? 366 : 365;
//   let vacacionesPorAntiguedad = 0;
//   if (periodoCalculado <= 5) {
//     vacacionesPorAntiguedad = 14;
//   } else if (periodoCalculado > 5 && periodoCalculado <= 10) {
//     vacacionesPorAntiguedad = 21;
//   } else if (periodoCalculado > 10 && periodoCalculado <= 20) {
//     vacacionesPorAntiguedad = 28;
//   } else {
//     vacacionesPorAntiguedad = 35;
//   }
//   let vacacionesCorrespondientes =
//     (diasTrabajadosEnElAnio * vacacionesPorAntiguedad) / diasEnElAnio;
//   let vacacionesProporcionales = (salario / 25) * vacacionesCorrespondientes;
//   return vacacionesProporcionales;
// };

// const SacSobreVacaciones = (
//   salario: number,
//   fechaInicial: Date,
//   periodoCalculado: number
// ) => {
//   let resultadoVacaciones: number = vacacionesProporcionales(
//     salario,
//     fechaInicial,
//     periodoCalculado
//   );
//   let sacSobreVacaciones = (resultadoVacaciones * (833 / 100)) / 100;
//   return sacSobreVacaciones;
// };

// export {
//   calcularArt245,
//   calcularArt232,
//   sacSobreArt232,
//   calcularArt233,
//   sacSobreArt233,
//   diasTrabajadosMesEnCurso,
//   calcularSacProporcional,
//   vacacionesProporcionales,
//   SacSobreVacaciones,
// };
