// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var a = Number(lines[0]);
	var b = Number(words[0]);
	var c = Number(words[1]);
	var s = lines[2];
	console.log('%d %s',a+b+c,s);
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
`.replace('\n', ''))