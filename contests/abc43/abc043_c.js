'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let As = input[1].split(' ')
	let costs = []
	for(let i = -100; i <= 100 ; i++) {
		let cost = 0
		for(let j = 0 ; j < As.length ; j++) {
			let tmp = i - As[j]
			cost += tmp * tmp
		}
		costs.push(cost)
	}
	console.log(costs.sort((a, b) => a - b)[0])
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
4
-100 -100 -100 -100
`)