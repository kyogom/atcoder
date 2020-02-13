// 未完成
'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let As = input.slice(1, Number(input[0].substring(0,1)) + 1)
	let Bs = input.slice(Number(input[0].substring(0,1)) + 1, input.length)
	for(let i = 0; i < As.length - Bs.length + 1 ; i++) {
		for(let j = 0; j < As[i].length; j++) {
			if(As[i].substring(j, As[i].length).indexOf(Bs[0]) > -1) {
				let rs = isMatchLeft(As.slice(i, As.length).map(str => str.substr(j, str.length)))
				if(rs) {
					console.log('Yes')
					return
				}
			}
		}
	}
	console.log('No')
	function isMatchLeft(array) {
		for(let i = 0; i < array.length ; i++) {
			if(array[i].indexOf(Bs[i]) !== 0) {
				return false
			} else {
				continue
			}
		}
		return true
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
2 2
....
.#..
.
#
`)