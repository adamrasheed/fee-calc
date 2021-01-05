export const numberWithCommas = (x: number | null) => {
  if (x === null) {
    return 0
  } else {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
};
