const array1 = [2, 4, 6, 8, 11, 20, 15, 22];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [70, 42, 55, 81, 21, 91, 34];
const array4 = [2, 4, 6, 8, 10, 11, 12];
const masterArray = [array1, array2, array3, array4];

for (var i = 0; i < 4; i++) {
  const odds = masterArray[i].filter((num) => num % 2 === 1);
  console.log(odds);
}

function countConsonantsAndVowels(word) {
  let consonantsCount = 0;
  let vowelsCount = 0;

  function isVowel(letter) {
    return "aeiou".includes(letter);
  }

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];

    if (isVowel(currentLetter)) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }

  console.log(
    `${word} has ${consonantsCount} consonants and ${vowelsCount} vowels`
  );
}

countConsonantsAndVowels("hello");
countConsonantsAndVowels("ukelele");
countConsonantsAndVowels("awesome");
countConsonantsAndVowels("onomonopia");
countConsonantsAndVowels("textbook");

function reverseArray(inputArray) {
  const reversedArray = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    reversedArray.push(inputArray[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([1, 3, 5, 7, 9, 11]));
console.log(reverseArray([20, 50, 30, 60, 200]));
console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
