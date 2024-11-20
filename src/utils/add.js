function add(number) {
  if (number === "") return 0;

  const numArray = number.split(/,|\n/).map((num) => parseInt(num, 10));
  return numArray.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
