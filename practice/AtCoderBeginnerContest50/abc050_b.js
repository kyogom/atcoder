'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	const N = Number(input[0])
	const Ts = input[1].split(' ').map(el => Number(el))
	const M = Number(input[2])
	const Ds = input.slice(3, input.length).map(e => { return { q: Number(e.split(' ')[0]), sec: Number(e.split(' ')[1])} })

	let drinkEffects = []
	for(let i = 1 ; i <= M ; i++) {
		drinkEffects.push(Ts[Ds[i - 1].q - 1] - Ds[i - 1].sec)
	}
	for(let i = 0 ; i < drinkEffects.length; i++) {
		console.log(Ts.reduce((prev, curr) => prev + curr, 0) - drinkEffects[i])
	}
	
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
5
7 2 3 8 5
3
4 2
1 7
4 13
`)