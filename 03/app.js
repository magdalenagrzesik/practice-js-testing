export default function randomNumber(min, max) {
  if (min > max) {
    throw new Error("Min value is bigger than max value");
  } else if (!isNaN(min) && !isNaN(max)) {
    return 1;
  }

  throw new Error("Range is not a number");
}
