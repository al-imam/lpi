function startWith(ex) {
  return `^${ex}`;
}

function endWith(ex) {
  return `${ex}$`;
}

function letter({ lowerCase = true, upperCase = true, range = "{1,}" } = {}) {
  return `[${lowerCase ? "a-z" : ""}${upperCase ? "A-Z" : ""}]${range}`;
}

function word({ underscore = false, haveDot = false } = {}) {
  if (haveDot) return wordWithHaveDots(underscore);
  return `[a-zA-Z9-0${underscore ? "_" : ""}]`;
}

function wordWithHaveDots({ underscore = false } = {}) {
  return `(\\.[a-zA-Z0-9${underscore ? "_" : ""}]+)*`;
}

function mustHave(ex) {
  return ex;
}

function range({ min = 2, max = 5 } = {}) {
  return `{${min},${max}}`;
}

const email = new RegExp(
  startWith(letter()) +
    word({ haveDot: true }) +
    mustHave("@") +
    letter({ lowerCase: true, upperCase: false, range: range(3, 5) }) +
    mustHave(`\\.`) +
    endWith(letter({ lowerCase: true, upperCase: false, range: range(2, 5) }))
);

export default email;
