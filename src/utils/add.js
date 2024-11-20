function add(number) {
  if (number === "") return 0;

  const numArray = number.split(/,|\n/).map((num) => parseInt(num, 10));
  if (numArray.length === 1) return numArray[0];

  return 0;
}

module.exports = add;
