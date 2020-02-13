'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let c = input[0].split(' ')[0]
	const vowel = 'aiueo'.split('')
	if(vowel.some(v => v === c)) {
		console.log('vowel')
	} else {
		console.log('consonant')
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
p
`)