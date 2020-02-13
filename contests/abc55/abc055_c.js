'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = Number(input[0].split(' ')[0])
	let M = Number(input[0].split(' ')[1])
	if(N > M / 2) {
		let ccMaxCount = Math.floor(M / 2)
		console.log(Math.min(ccMaxCount, N))
	} else {
		console.log(Math.floor((N * 2 + M) / 4))
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
3 2
`)