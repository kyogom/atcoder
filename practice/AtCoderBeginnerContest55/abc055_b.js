'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = input[0].split(' ')[0]
	function fact(n) {
		var result = 1;
		for (var i = 1; i <= n; i++) {
			result = result * i % 1000000007;
		}
		return result;
	}
	console.log(fact(N) % 1000000007)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
100000
`)