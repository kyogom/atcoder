'use strict'
function Main(lines) {
	let n = Number(lines.split(' ')[0])

	console.log(n)
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
1
2 3
test
`.trim().replace('\n', '').split("\n"))