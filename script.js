const inputValidDate1 = "03/04/2001"; // true
const inputValidDate2 = "03/14/2001"; // false

function isValidDate(d) {
  const splitedDate = d.split("/");
  console.log(splitedDate);
  if (splitedDate.length !== 3) {
    console.log("notValidFormat");
    return false;
  }

  const day = parseInt(splitedDate[0]);
  const month = parseInt(splitedDate[1]);
  const year = parseInt(splitedDate[2]);

  if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    console.log("validType");
  } else {
    console.log("notValidDate1");
    return false;
  }

  // Cette fonction ne gère pas les années bissextiles.
  function maxDaysInMonth(m) {
    console.log(m);
    if (m === 2) {
      return 28;
    }
    if (
      m === 1 ||
      m === 3 ||
      m === 5 ||
      m === 7 ||
      m === 8 ||
      m === 10 ||
      m === 12
    ) {
      return 31;
    } else {
      return 30;
    }
  }

  const maxDays = maxDaysInMonth(month);
  console.log(maxDays);

  if (
    day >= 1 &&
    day <= 31 &&
    month >= 1 &&
    month <= 12 &&
    year >= 999 &&
    year <= 9999
  ) {
    console.log("isValidDate");
    return true;
  } else {
    console.log("notValidDate2");
    return false;
  }
}

const resultValidDate = isValidDate(inputValidDate1);
console.log(resultValidDate);

const inputPalindromeDate1 = "11/02/2011"; // true
const inputPalindromeDate2 = "03/04/2001"; // false

function isPalindrome(d2) {
  const splitedDate = d2.split("/").join("");
  const reversedDate = splitedDate.split("").reverse().join("");
  console.log(splitedDate);
  console.log(reversedDate);
  return splitedDate === reversedDate;
}

const resultPalindrome = isPalindrome(inputPalindromeDate1);
console.log(resultPalindrome);

function getNextPalindromes(x) {
}

getNextPalindromes(10);
