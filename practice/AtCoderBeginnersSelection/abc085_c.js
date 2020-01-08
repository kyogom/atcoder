// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	words = lines[0].split(" ");
	var n = Number(words[0])
	var y = Number(words[1])

	for(var i = 0; i <= n; i++) {
		for(var j = 0; i + j <= n; j++) {
			if(i * 10000 + j * 5000 + (n - i - j) * 1000 === y) {
				console.log(i,j,n - i - j)
				return
			}
		}
	}

	console.log(-1, -1, -1)
	return
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
20 196000
`.replace('\n', ''))