// wrong answer
'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let K = Number(input[0].split(' ')[0])
	let S = Number(input[0].split(' ')[1])
	const Is = []
	const Js = []
	const tmp = []
	const ans = []
	// i <= K
	for(let i = 0; i <= K ; i++) {
		Is.push(i)
		Js.push(i)
	}
	// j <= 2K
	for(let i = K + 1; i <= 2 * K ; i++) {
		if(i > S) break
		Js.push(i)
	}
	// j - i <= K
	for(let i = 0; i < Is.length; i++) {
		for(let j = 0; j < Js.length; j++) {
			if(Js[j] - Is[i] >= 0 && Js[j] - Is[i] <= K) {
				tmp.push({
					i, j
				})
			}
		}
	}
	for(let j = 0; j < tmp.length; j++) {
		if(S - tmp[j].j <= K) {
			ans.push(tmp[j])
		}
	}
	console.log(ans.length)

}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
2 0
`)