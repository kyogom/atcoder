'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let s = input[0]
	let oda = 0
	while(1) {
		s = s.replace(/(dream$|dreamer$|erase$|eraser$)/, '')
		oda++
		if(s === '') {
			console.log('YES')
			return
		}
		if(oda > input[0].length / 5) {
			console.log('NO')
			return
		}
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
erasedreamererasererasedreameraseeraseeraseerasedreamera
`)