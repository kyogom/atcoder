'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let a = input[0].split(' ').map(n => BigInt(n))[0]
	let b = input[0].split(' ').map(num => BigInt(num))[1]
	let x = input[0].split(' ').map(num => BigInt(num))[2]
	let left = b / x * x / x
	let right = (divCeil(a, x) * x) / x
	if(a <= x) {
		console.log((b / x).toString())
		return
	}
	console.log( (left - right + BigInt(1)).toString())

	function divCeil (a, x) {
		if((a % x) * BigInt(2) >= x) {
			return a / x + BigInt(1)
		}
		return a / x
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
1 1000000000000000000 3
`)