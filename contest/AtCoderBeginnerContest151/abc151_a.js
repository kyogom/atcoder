// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var alphabets = 'abcdefghijklmnopqrstuvwxyz'
	console.log(alphabets[alphabets.indexOf(words[0]) + 1])
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
y
`.replace('\n', ''))