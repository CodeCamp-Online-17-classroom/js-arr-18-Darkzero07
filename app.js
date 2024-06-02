let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const summaryValue = Object.values(salaries).reduce(
  (sum, value) => sum + value,
  0
);
console.log(summaryValue);
const summaryKey = Object.keys(salaries).reduce(
  (sum, key) => sum + salaries[key],
  0
);
console.log(summaryKey);
const summaryEntrie = Object.entries(salaries).reduce(
  (sum, [key, value]) => sum + value,
  0
);
console.log(summaryEntrie);
