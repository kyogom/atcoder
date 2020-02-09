'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let S = input[0].split(' ')[0]
	console.log(S.replace(/./g, 'x'))
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
gone
`)