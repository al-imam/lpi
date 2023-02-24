function startWith(ex) {
  return `^${ex}`;
}

function letter({ lowerCase = true, upperCase = true }) {
  return `[${lowerCase ? "a-z" : ""}${upperCase ? "A-Z" : ""}]`;
}

function word({ underscore = false, haveDot = false }) {
  if (haveDot) return wordWithHaveDots(underscore);
  return `[a-zA-Z9-0${underscore ? "_" : ""}]`;
}

function wordWithHaveDots({ underscore = false }) {
  return `(\\.[a-zA-Z0-9${underscore ? "_" : ""}]+)*`;
}

function mustHave(ex) {
  return ex;
}

const email = new RegExp();

export default email;
