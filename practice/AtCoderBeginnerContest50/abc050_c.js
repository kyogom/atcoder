// wrong
'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = input[0].split(' ')[0]
	let Astr = input[1]
	let As = input[1].split(' ')
	As = As.sort((a, b) => a - b)
	const oddsComb = [1, 1]
	const evensComb = [0]
	for(let i = 1; i * 2 < N; i++) {
		oddsComb.push(i * 2 + 1)
		oddsComb.push(i * 2 + 1)
		evensComb.push(i * 2)
		evensComb.push(i * 2)
	}
	// Nが偶数なら、0が存在しない && 全ての数字が奇数で２つずつ
	if(N % 2 === 0) {
		if(Astr.match(0)) {
			console.log(0)
			return
		}
		for(let i = 0; i < N ; i++) {
			if(As[i] != oddsComb[i]) {
				console.log(0)
				return
			}
		}
	}

	// Nが奇数なら、0が１つ存在する && 全ての数字が偶数で２つずつ
	if(N % 2 === 1) {
		if(Astr.match(0).length !== 1) {
			console.log(0)
			return
		}
		for(let i = 0; i < N ; i++) {
			if(As[i] != evensComb[i]) {
				console.log(0)
				return
			}
		}
	}
	console.log(Math.pow(2, Math.floor(N / 2)))
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
1
2
`)