// wrong
'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let X = Number(input[0].split(' ')[0])
	let i = 1
	let cur = 0
	while(1) {
		cur = cur + i
		i++
		if(X <= cur) {
			break
		} 
	}
	let before = cur - (i - 1)
	let after = cur
	if(X - before > (after - X) * 2) {
		console.log(i + (X - after) * 2)
	} else {
		// 待つ
		console.log((i - 2) + X - before)
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
3
`)