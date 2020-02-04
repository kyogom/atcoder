'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = input[0].split(' ')[0]
	let S = input[1].split(' ')[0]
	let Xs = []
	let x = 0
	Xs.push(x)
	for(let i = 0; i < N; i++) {
		if(S[i] === 'D') {
			Xs.push(--x)
		} else {
			Xs.push(++x)
		}
	}
	console.log(Math.max(...Xs))
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
7
DDIDDII
`)