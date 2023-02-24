function startWith(ex) {
  return `^${ex}`;
}

function letter({ lowerCase = true, upperCase = true }) {
  return `[${lowerCase ? "a-z" : ""}${upperCase ? "A-Z" : ""}]`;
}

const email = new RegExp();

export default email;
