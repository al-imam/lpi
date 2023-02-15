function generateId(len) {
  const arr = crypto.getRandomValues(new Uint8Array((len || 40) / 2));
  return Array.from(arr, (dec) => dec.toString(16).padStart(2, "0"))
    .join("")
    .replace(/(.{8})/g, "$1-");
}

export default generateId;
