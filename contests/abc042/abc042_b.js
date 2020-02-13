// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var s = lines.splice(1, lines.length)
	var s_sorted = s.sort((a, b) => a > b ? 1 : -1)
	console.log(s_sorted.join(''))
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
3 3
dxx
axx
cxx
`.replace('\n', ''))