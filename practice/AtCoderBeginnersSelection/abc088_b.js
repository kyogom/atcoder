// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	var n = Number(lines[0]);
	var a = lines[1].split(" ").map(el => Number(el));
	var alice = []
	var bob = []
	a.sort(compare)
	while(1) {
		alice.push(a.shift())
		if(a.length < 1) break
		bob.push(a.shift())
		if(a.length < 1) break
	}
	console.log(alice.reduce((acc, cur) => acc + cur) - bob.reduce((acc, cur) => acc + cur))

	function compare(a, b) {
		if (a < b) {
		   return 1;
		}
		if (a > b) {
		   return -1;
		}
		return 0;
	  }
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
7
3 1 99 35 16 88 102
`.replace('\n', ''))