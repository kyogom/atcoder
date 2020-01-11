// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var n = Number(words[0]);
	var m = Number(words[1]);
	var a = lines[1].split(" ").map(n => n / 2)

	// 最小公倍数
	// least common multiple
	var lcm = 1;

	a.forEach(num => {
		lcm = calc_lcm(lcm, num)
	});
	console.log(lcm)
	
	// 最大公約数
	// greatest common divisor
	function calc_gcd(a, b) {
		while ( b != 0 ) {
			t = b;
			b = a % b;
			a = t;
		}
		return a;
	}

	function calc_lcm(i, j) {
		var gcd = calc_gcd(i, j);
		return i / gcd * j;
	}
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
5 1000000000
6 6 2 6 2
`.replace('\n', ''))