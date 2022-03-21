function calcAverageHumanAge(ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);

  const adultDogs = humanAge.filter(humanAge => humanAge > 18);
  console.log(adultDogs);

  const averageAge =
    adultDogs.reduce((acc, cur) => acc + cur, 0) / adultDogs.length;
  console.log(averageAge);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
