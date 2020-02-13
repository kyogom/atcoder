'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let A = input[0].split(' ')[0]
	let B = input[0].split(' ')[1]
	let C = input[0].split(' ')[2]
	let D = input[0].split(' ')[3]
	console.log(Math.max(A * B, C * D))
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
100 600 200 300
`)