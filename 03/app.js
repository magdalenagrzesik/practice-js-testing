export default function randomNumber(min, max) {
 if (!isNaN(min) && !isNaN(max)) {
  return 1;
 } 
 throw new Error("Range is not a number");
 
}
