export const numberWithCommas = (number: number | null) => {
  if (number === null) {
    return "0";
  } else {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
};
