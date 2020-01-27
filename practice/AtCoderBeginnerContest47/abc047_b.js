'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let W = input[0].split(' ').map(num => Number(num))[0]
	let H = input[0].split(' ').map(num => Number(num))[1]
	let Xs = input.slice(1, input.length).map(el => Number(el.split(' ')[0]))
	let Ys = input.slice(1, input.length).map(el => Number(el.split(' ')[1]))
	let As = input.slice(1, input.length).map(el => Number(el.split(' ')[2]))
	let base = {x: 0, y: 0}
	let topRight = {x: W, y: H}
 
	for(let i = 0 ; i < As.length ; i++) {
		let a = As[i]
		switch (a) {
			case 1:
				base.x = Xs[i] > base.x ? Xs[i] : base.x
				break
			case 2:
				topRight.x = Xs[i] < topRight.x ? Xs[i] : topRight.x
				break
			case 3:
				base.y = Ys[i] > base.y ? Ys[i] : base.y
				break
			case 4:
				topRight.y = Ys[i] < topRight.y ? Ys[i] : topRight.y
				break
		}
	}
	const width = topRight.x - base.x
	const height = topRight.y - base.y
	const square = width * height
	if(square < 0 || width < 0 || height < 0) {
		console.log(0)
	} else {
		console.log(square)
	}
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
10 10 5
1 6 1
4 1 3
6 9 4
9 4 2
3 1 3
`)