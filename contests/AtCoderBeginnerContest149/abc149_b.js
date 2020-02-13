// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	words = lines[0].split(" ");
	var a = Number(words[0]);
	var b = Number(words[1]);
	var k = Number(words[2]);
	if(a <= k) {
		b = b - (k - a)
		a = 0;
		console.log(a, b >= 0 ? b : 0)
	} else {
		console.log(a-k, b)
	}

}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
10 5 3
`.replace('\n', ''))