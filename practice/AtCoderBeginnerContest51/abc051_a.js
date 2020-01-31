'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	console.log(input[0].replace(/,/g, ' '))
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
happy,newyear,enjoy
`)