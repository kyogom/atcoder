'use strict'
function Main(input) {
	let lines = input.split("\n");
    let N = Number(lines[0])
    let out = 0
    for(let i = 0; i <= N; i ++) {
        out+= i
    }
    console.log(out)
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
1
`.trim().replace('\n', ''))