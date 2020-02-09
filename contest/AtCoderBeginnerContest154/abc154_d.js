'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let K = input[0].split(' ')[1]
	let P = input[1].split(' ').map(p => Number(p))
	let sums = []
	// 累積和
	let ruisekiwa = [P[0]]
	for(let i = 1; i < P.length ; i++) {
		ruisekiwa.push(ruisekiwa[i - 1] + P[i])
	}
	sums.push({v :ruisekiwa[K - 1], i: 0})
	for(let i = 0; i < P.length - K; i++) {
		sums.push({ v : ruisekiwa[i + Number(K)] - ruisekiwa[i], i: i + 1})
	}
	// 動的計画法
	let dp = [0]
	for(let i = 1; i <= 1000 ; i++) {
		dp.push((dp[i - 1] + i))
	}
	sums = sums.sort((a, b) => a.v- b.v)
	let index = sums[sums.length - 1].i
	let tmp = P.slice(index, index + Number(K))
	let result = 0
	for(let i = 0; i < tmp.length ; i++) {
		result += dp[tmp[i]] / tmp[i]
	}
	console.log(result.toFixed( 12 ))
	
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
5 3
2 4 5 1 2 
`)