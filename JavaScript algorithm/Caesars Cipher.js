function rot13(str) {
  // let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  // let cipher = "nopqrstuvwxyzabcdefghijklm".split('');
	let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let cipher = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  let result = "";

  for (let i = 0; i < alphabet.length; i++) {
  	while (alphabet[i] <= str) {
  		result += cipher[i];
  		str -= alphabet[i];
  	}
  }
  return result;
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));