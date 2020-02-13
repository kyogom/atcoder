'use strict'

// 解けなかった問題
const main = arg => {
	const input = arg.trim().split("\n");
	let Ns = input[0].split('')
	let length = Ns.length
	let formulas = []
	
	// length - 1回ループ
	let idx = 1
	for(let i = 0; i < length - 1; i++) {
		Ns.splice(idx, 0, '+')
		formulas.push(Ns.concat())
		idx += 2
	}
	let test = []
	let i = 0
	while(1){
		let lastIdx = formulas[i].lastIndexOf('+')
		let formula = formulas[i].concat()
		if(lastIdx === length - 1) {
			console.log('loop')
			break
		} else {
			formula.splice(lastIdx, 1)
			formula.splice(lastIdx + 1, 0, '+')
			formulas.push(formula.concat())
		}
		i++
		if(i === formulas.length) break
	}

	console.log(formulas)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
99999
`)