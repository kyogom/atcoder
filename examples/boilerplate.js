'use strict'
function Main(lines) {
	let n = Number(lines[0].split(' ')[0])

	console.log(n)
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().replace('\n', '').split("\n"));
*/

// テスト用の標準入力
Main(`
1
2 3
test
`.trim().replace('\n', '').split("\n"))