'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = Number(input[0].split(' ')[0])
	console.log(N >= 1200 ? 'ARC' : 'ABC')
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
1000
`)