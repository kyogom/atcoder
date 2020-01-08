// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	var a = Number(lines[0]);
	var b = Number(lines[1]);
	var c = Number(lines[2]);
	var x = Number(lines[3]);
	var out = [];
	for(var i = 0; i <= a; i++) {
		for(var j = 0; j <= b; j++) {
			for(var k = 0; k <= c; k++) {
				out.push(i * 500 + j * 100 + k * 50 === x)
			}
		}
	}
	console.log(out.filter(out => out === true).length)
	
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
var input = 
`
30
40
50
6000
`.replace('\n', '') //最初の改行を削除

Main(input)