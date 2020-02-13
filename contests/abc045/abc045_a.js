'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let a = Number(input[0])
	let b = Number(input[1])
	let h = Number(input[2])
	console.log((a + b) * h / 2)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
3
4
2
`)