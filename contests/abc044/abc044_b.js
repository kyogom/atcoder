'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let W = input[0]
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	for(let i = 0 ; i < alphabets.length ; i++) {
		let match = W.match(new RegExp(alphabets[i], 'g'))
		if(match && match.length % 2 === 1) {
			console.log('No')
			return
		}
	}
	console.log('Yes')
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
hthth
`)