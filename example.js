// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	words = lines[1].split(" ");
	var a = Number(lines[0]);
	var b = Number(words[0]);
	var c = Number(words[1]);
	var s = lines[2];
	console.log('%d %s',a+b+c,s);
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
var input = 
`
1
2 3
test
`.replace('\n', '') //最初の改行を削除

Main(input)