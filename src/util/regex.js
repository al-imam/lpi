function startWith(ex) {
  return `^${ex}`;
}

function letter({ lowerCase = true, upperCase = true }) {
  return `[${lowerCase ? "a-z" : ""}${upperCase ? "A-Z" : ""}]`;
}

function word({ underscore = false }) {
  return `[a-zA-Z9-0${underscore ? "_" : ""}]`;
}

const email = new RegExp();

export default email;
