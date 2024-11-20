function add(number) {
  if (number === "") return 0;

  const numArray = number.split(/,|\n/).map((num) => parseInt(num, 10));

  const negative = numArray.filter((num) => num < 0);

  if (negative.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negative.join(", ")}`);
  }

  return numArray.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
