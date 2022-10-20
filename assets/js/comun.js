export function precisePrice(x) {
  return parseFloat(x).toPrecision(3);
}

export function precise(x) {
  return parseFloat(x).toFixed();
}

export default function emptyGet() {
  return "";
}