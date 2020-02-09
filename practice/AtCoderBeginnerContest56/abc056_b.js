'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let W = Number(input[0].split(' ')[0])
	let a = Number(input[0].split(' ')[1])
	let b = Number(input[0].split(' ')[2])
	let dist = 0
	if(b <= a && b >= a + W) {
		console.log(0)
		return
	}
	if(b + W < a) {
		dist = a - (b + W)
	} else {
		dist = b - (a + W)
	}
	console.log(dist < 0 ? 0 : dist)

}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
5 10 1
`)