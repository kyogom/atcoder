'use strict'
function Main(lines) {
	let s = lines[0].split('')
	let out = []
	while(1) {
		if(s.length <= 0) break
		let char = s.shift()
		if(char === 'B') {
			out.pop()
		} else {
			out.push(char)
		}
	}
	console.log(out.join(''))
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().replace('\n', '').split("\n"));
*/

// テスト用の標準入力
Main(`
0BB1
`.trim().replace('\n', '').split("\n"))