'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let S = input[0].split(' ')[0]
	let T = input[0].split(' ')[1]
	let A = input[1].split(' ')[0]
	let B = input[1].split(' ')[1]
	let U = input[2].split(' ')[0]
	if(U === S) {
		A = A - 1
	}
	if(U === T) {
		B = B - 1
	} 
	console.log(A + ' ' + B)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
blue blue
5 51
blue
`)