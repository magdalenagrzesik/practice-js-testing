export default function randomNumber(min, max) {
  if (min > max || isNaN(min) || isNaN(max)) {
    throw new Error("Range is incorrect");
  }
  return 1;
}
