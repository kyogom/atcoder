'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = input[0].split(' ')[0]
	let As = input[1].split(' ')
	As = As.sort((a, b) => a - b)
	for(let i = 0; i < As.length - 1; i++) {
		if(As[i] === As[i + 1]) {
			console.log('NO')
			return
		}
	}
	console.log('YES')
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
5
2 6
`)