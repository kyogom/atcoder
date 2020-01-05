// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	tmp = lines[1].split(" ");
	var a = Number(lines[0]);
	var b = Number(tmp[0]);
	var c = Number(tmp[1]);
	var s = lines[2];
	console.log('%d %s',a+b+c,s);
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const input = 
`
1
2 3
test
`.replace('\n', '') //最初の改行を削除

Main(input)