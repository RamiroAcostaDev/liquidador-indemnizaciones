import moment from "moment";

const formatearNumeroAmoneda = (numero: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(numero);
};

//calcular periodo
const calcularPeriodoTotal = (fechaInicial: Date, fechaFinal: Date) => {
  let initialDateMoment = moment(fechaInicial);
  let finalDateMoment = moment(fechaFinal);
  let diffYears = finalDateMoment.diff(initialDateMoment, "years");
  initialDateMoment.add(diffYears, "years");

  let calcularPeriodo = diffYears;

  let remainingMonths = finalDateMoment.diff(initialDateMoment, "months");
  if (remainingMonths >= 3) {
    calcularPeriodo++;
  }

  if (calcularPeriodo < 1) {
    console.log("La fecha final no puede ser mayor a la fecha inicial");
    calcularPeriodo = 0;
  }
  return calcularPeriodo;
};

//calcular art 245
const calcularArt245 = (remuneracion: number, periodo: number) => {
  let resultado = periodo * remuneracion;
  return resultado;
};
//calcular art 232
const calcularArt232 = (
  remuneracion: number,
  periodo: number,
  preavisoChecked: boolean
) => {
  let indemnizacion232 = 0;
  const diasDelMes = 30;
  const periodoUnAño = 1;
  const periodoCincoAños = 5;
  const quinceDiasDeVacaciones = 15;
  const treintaDiasDeVacaciones = 30;
  const sesentaDiasDeVacaciones = 60;

  let salarioPorDia = remuneracion / diasDelMes;
  const periodoMenorAUnAño = periodo < periodoUnAño;
  const igualAUnAño = periodo == periodoUnAño;
  const entreUnoYCincoAños =
    periodo > periodoUnAño && periodo <= periodoCincoAños;

  if (igualAUnAño) {
    indemnizacion232 = salarioPorDia * quinceDiasDeVacaciones;
  } else if (entreUnoYCincoAños) {
    indemnizacion232 = salarioPorDia * treintaDiasDeVacaciones;
  } else if (periodo > periodoCincoAños) {
    indemnizacion232 = salarioPorDia * sesentaDiasDeVacaciones;
  } else if (preavisoChecked || periodoMenorAUnAño) {
    indemnizacion232 = 0;
  }
  return indemnizacion232;
};

const sacSobreArt232 = (art232: number) => {
  let coeficienteDeSAC = 833 / 100 / 100;
  let sacArt232 = art232 * coeficienteDeSAC;
  return sacArt232;
};
//art 233
const calcularArt233 = (remuneracion: number, fechaFinal: Date) => {
  let indemnizacion233 = 0;
  const diasTrabajadosEnElMes = moment(fechaFinal)
    .utcOffset(new Date().getTimezoneOffset())
    .date();
  const totalDiasDelMes = moment(fechaFinal).daysInMonth();
  const salarioPorDia = remuneracion / totalDiasDelMes;

  if (diasTrabajadosEnElMes === totalDiasDelMes) {
    indemnizacion233 = 0;
  } else {
    indemnizacion233 =
      salarioPorDia * (totalDiasDelMes - diasTrabajadosEnElMes);
  }
  return indemnizacion233;
};

const sacArt233 = (art233: number) => {
  let coeficienteDeSAC = 833 / 100 / 100;
  let sacSobreArt233 = art233 * coeficienteDeSAC;
  return sacSobreArt233;
};

//Sac Proporcional
const calcularSacProporcional = (remuneracion: number, fechaFinal: Date) => {
  const fechaDada = moment(fechaFinal);
  const diasTranscurridos = fechaDada.dayOfYear();
  const esAñoBisiesto = fechaDada.isLeapYear();
  const semestre = esAñoBisiesto ? 181 : 180;
  let sacProporcional = 0;
  if (diasTranscurridos <= semestre) {
    sacProporcional = (remuneracion / 2 / semestre) * diasTranscurridos;
  } else {
    sacProporcional =
      (remuneracion / 2 / semestre) * (diasTranscurridos - semestre);
  }
  return sacProporcional;
};

//Vacaciones proporcionales
const calcularVacacionesProporcionales = (
  remuneracion: number,
  fechaFinal: Date,
  periodo: number
) => {
  const fechaDeDistracto = moment(fechaFinal);
  const diasTrabajadosEnElAnio = fechaDeDistracto.dayOfYear();
  const esAñoBisiesto = fechaDeDistracto.isLeapYear();
  const diasEnElAnio = esAñoBisiesto ? 366 : 365;
  let vacacionesPorAntiguedad = 0;
  if (periodo <= 5) {
    vacacionesPorAntiguedad = 14;
  } else if (periodo > 5 && periodo <= 10) {
    vacacionesPorAntiguedad = 21;
  } else if (periodo > 10 && periodo <= 20) {
    vacacionesPorAntiguedad = 28;
  } else {
    vacacionesPorAntiguedad = 35;
  }
  let vacacionesCorrespondientes =
    (diasTrabajadosEnElAnio * vacacionesPorAntiguedad) / diasEnElAnio;
  let vacacionesProporcionales =
    (remuneracion / 25) * vacacionesCorrespondientes;
  return vacacionesProporcionales;
};

const calcularSacVacaciones = (vacacionesProporcionales: number) => {
  let coeficienteDeSAC = 833 / 100 / 100;
  let sacSobreVacaciones = vacacionesProporcionales * coeficienteDeSAC;
  return sacSobreVacaciones;
};

//Dias trabajados en el mes en curso
const calculardiasTrabajadosMesEnCurso = (
  remuneracion: number,
  fechaFinal: Date
) => {
  const diasTrabajados = moment(fechaFinal)
    .utcOffset(new Date().getTimezoneOffset())
    .date();
  console.log("Dias trabajados: ", diasTrabajados);
  const diasDelMes = moment(fechaFinal).daysInMonth();
  console.log("Dias del mes: ", diasDelMes);
  const salarioPorDia = remuneracion / diasDelMes;
  let diasTrabajadosMesEnCurso = salarioPorDia * diasTrabajados;
  return diasTrabajadosMesEnCurso;
};

//Diferencias salariales
const calcularDiferenciaSalarial = (
  remuneracionPercibido: number,
  remuneracion: number,
  fechaInicial: Date,
  fechaFinal: Date
) => {
  const fechaDeInicio = moment(fechaInicial);
  const fechaDeFinalizacion = moment(fechaFinal);
  const mesesDeDiferenciaEntreFechas = fechaDeFinalizacion.diff(
    fechaDeInicio,
    "months"
  );
  const diferenciaEntreSalarios = remuneracion - remuneracionPercibido;
  let periodoReclamable = 24;
  let diferenciasSalariales = 0;

  if (remuneracionPercibido <= 0) {
    return diferenciasSalariales;
  } else if (mesesDeDiferenciaEntreFechas < periodoReclamable) {
    diferenciasSalariales =
      diferenciaEntreSalarios * mesesDeDiferenciaEntreFechas;
    return diferenciasSalariales;
  } else {
    diferenciasSalariales = diferenciaEntreSalarios * periodoReclamable;
    return diferenciasSalariales;
  }
};

//Horas Extras
const calcularHorasExtras = (
  remuneracion: number,
  horasDiariasLaboradas: number,
  diasLaborados: number,
  jornadaCCT: number,
  fechaInicial: Date,
  fechaFinal: Date
) => {
  const fechaDeInicio = moment(fechaInicial);
  const fechaDeFinalizacion = moment(fechaFinal);
  const mesesDeDiferenciaEntreFechas = fechaDeFinalizacion.diff(
    fechaDeInicio,
    "months"
  );
  let horasExtrasTotales = 0;
  let semanasDelMes = 4;
  let horasAlCincuentaPorCiento = 1.5;
  let periodoNoPrescripto = 24;
  let horasExtrasSemanal = 0;
  let horasExtrasMensual = 0;

  const remuneracionPorHoraDevengado =
    remuneracion / (jornadaCCT * semanasDelMes);
  const valorHoraExtra =
    remuneracionPorHoraDevengado * horasAlCincuentaPorCiento;
  const horasLaboradasPorSemana = horasDiariasLaboradas * diasLaborados;

  if (horasLaboradasPorSemana <= jornadaCCT) {
    console.log("No se calculan horas extras");
    return horasExtrasTotales;
  } else {
    const diferenciaEntreHoras = horasLaboradasPorSemana - jornadaCCT;
    horasExtrasSemanal = diferenciaEntreHoras * valorHoraExtra;
    horasExtrasMensual = horasExtrasSemanal * semanasDelMes;

    if (mesesDeDiferenciaEntreFechas < periodoNoPrescripto) {
      horasExtrasTotales = horasExtrasMensual * mesesDeDiferenciaEntreFechas;
      return horasExtrasTotales;
    } else {
      horasExtrasTotales = horasExtrasMensual * periodoNoPrescripto;
      return horasExtrasTotales;
    }
  }
};

//Art 80
const calcularArt80 = (remuneracion: number) => {
  let resultadoArt80 = remuneracion * 3;
  return resultadoArt80;
};

//Art 8
const calcularArt8Ley24013 = (
  remuneracion: number,
  fechaInicial: Date,
  fechaFinal: Date
) => {
  const fechaDeInicio = moment(fechaInicial);
  const fechaDeFinalizacion = moment(fechaFinal);
  const mesesDeDiferenciaEntreFechas = fechaDeFinalizacion.diff(
    fechaDeInicio,
    "months"
  );
  let resultadoArt8 = 0;
  let cuartaParte = 4;

  resultadoArt8 = (remuneracion * mesesDeDiferenciaEntreFechas) / cuartaParte;
  return resultadoArt8;
};

//Art 9
const calcularArt9Ley24013 = (
  remuneracion: number,
  fechaInicial: Date,
  fechaDeRegistracion: Date
) => {
  const fechaDeInicio = moment(fechaInicial);
  const fechaDeRegistro = moment(fechaDeRegistracion);
  const diasDeDiferenciaEntreFechas = fechaDeRegistro.diff(
    fechaDeInicio,
    "days"
  );
  let cuartaParte = 4;
  let diasDelMes = 30;
  let remuneracionDiaria = remuneracion / diasDelMes;

  let resultadoArt9 =
    (remuneracionDiaria * diasDeDiferenciaEntreFechas) / cuartaParte;
  return resultadoArt9;
};

//Art 10
const calcularArt10Ley24013 = (
  remuneracion: number,
  fechaRegistracion: Date,
  fechaFinal: Date
) => {
  const fechaRegistro = moment(fechaRegistracion);
  const fechaDistracto = moment(fechaFinal);
  const diasDeDiferenciaEntreFechas = fechaDistracto.diff(
    fechaRegistro,
    "days"
  );
  console.log("dias de diferencia art 10:", diasDeDiferenciaEntreFechas);
  //se puede cambiar a meses. ahora calcula por días de diferencia
  const mesesDeDiferenciaEntreFechas = fechaDistracto.diff(
    fechaRegistro,
    "months"
  );
  let salarioSinRegistrarDiario = 0;
  let diasDelMes = 30;
  let resultadoArt10 = 0;
  let cuartaParte = 4;

  salarioSinRegistrarDiario =
    (remuneracion - mesesDeDiferenciaEntreFechas) / diasDelMes;
  console.log("Salario sin registrar diario:", salarioSinRegistrarDiario);
  resultadoArt10 =
    (salarioSinRegistrarDiario * diasDeDiferenciaEntreFechas) / cuartaParte;

  return resultadoArt10;
};

export {
  formatearNumeroAmoneda,
  calcularPeriodoTotal,
  calcularArt245,
  calcularArt232,
  sacSobreArt232,
  calcularArt233,
  sacArt233,
  calcularSacProporcional,
  calcularVacacionesProporcionales,
  calcularSacVacaciones,
  calculardiasTrabajadosMesEnCurso,
  calcularDiferenciaSalarial,
  calcularHorasExtras,
  calcularArt80,
  calcularArt8Ley24013,
  calcularArt9Ley24013,
  calcularArt10Ley24013,
};
