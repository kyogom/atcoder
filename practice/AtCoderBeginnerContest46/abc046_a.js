'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let Ns = input[0].split(' ')
	function uniq(array) {
		let result = []
		result.push(array[0])
		for(let i = 1; i < array.length; i++) {
			if(result.indexOf(array[i]) >= 0) {
				continue
			}
			result.push(array[i])
		}
		return result
	}
	console.log(uniq(Ns).length)
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
3 3 33
`)