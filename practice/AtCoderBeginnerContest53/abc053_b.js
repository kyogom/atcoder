'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let s = input[0].split(' ')[0]
	console.log(s.match(/A[A-Z]*Z/g)[0].length)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
HASFJGHOGAKZZFEGAAZ
`)