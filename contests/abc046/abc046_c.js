'use strict'
// 誤った回答
const main = arg => {
	const input = arg.trim().split("\n");
	let N = input[0].split(' ')[0]
	let Ts = input.slice(1, input.length).map(el => Number(el.split(' ')[0]))
	let As = input.slice(1, input.length).map(el => Number(el.split(' ')[1]))
	let Tcount = Ts[0]
	let Acount = As[0]
	for(let i = 1 ; i < N; i++) {
		if(Math.ceil(As[i - 1] / As[i]) * Ts[i] >= Ts[i - 1]) {
			Tcount = Math.ceil(Acount / As[i]) * Ts[i]
			Acount = Math.ceil(Acount / As[i]) * As[i]
		} else {
			Tcount = Math.ceil(Tcount / Ts[i]) * Ts[i]
			Acount = Math.ceil(Tcount / Ts[i]) * As[i]
		}
	}
	console.log(Tcount + Acount)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
4
1 1
1 1
1 5
1 100
`)