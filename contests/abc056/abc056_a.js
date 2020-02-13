'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let a = input[0].split(' ')[0]
	let b = input[0].split(' ')[1]
	console.log(a === b ? 'H' : 'D')
}
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
H H
`)