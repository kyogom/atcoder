// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var n = Number(lines[0]);
	var s = lines[1];
	var match = s.match(/ABC/g)
	console.log(match === null  ? 0 : match.length)

}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
19
THREEONEFOURONEFIVE
`.replace('\n', ''))