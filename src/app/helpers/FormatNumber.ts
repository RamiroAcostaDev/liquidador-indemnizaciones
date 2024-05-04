const formatearNumeroAmoneda = (numero: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(numero);
};

export default formatearNumeroAmoneda;
