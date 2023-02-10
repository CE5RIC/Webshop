export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "USD",
  }).format(number);
};
