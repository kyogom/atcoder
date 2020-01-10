// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var k = Number(words[0]);
	var x = Number(words[1])
	console.log(k * 500 >= x ? 'Yes' : 'No')
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
4 2000
`.replace('\n', ''))