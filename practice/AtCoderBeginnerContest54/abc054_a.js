'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let Alice = Number(input[0].split(' ')[0])
	let Bob = Number(input[0].split(' ')[1])
	let cards = []
	for(let i = 2; i <= 13; i++) {
		cards.push(i)
	}
	cards.push(1)

	if(cards.indexOf(Alice) > cards.indexOf(Bob)) {
		console.log('Alice')
	} else if(cards.indexOf(Alice) < cards.indexOf(Bob)) {
		console.log('Bob')
	} else {
		console.log('Draw')
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
13 1
`)