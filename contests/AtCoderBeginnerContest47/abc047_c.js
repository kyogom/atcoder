'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let S = input[0]
	console.log(removeSerial(S).length - 1)
	function removeSerial(S){
		let result = S[0]
		for(let i = 1; i < S.length; i++) {
			if(result[result.length - 1] === S[i]) {
				continue
			} else {
				result += S[i]
			}
		}
		return result
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
WBWBWBWBWB
`)