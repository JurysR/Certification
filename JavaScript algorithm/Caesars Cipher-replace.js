function rot13(str) {
  return str.replace(/[A-Z]/g, [N-ZA-M]);
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));