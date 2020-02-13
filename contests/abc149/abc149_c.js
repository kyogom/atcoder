// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var x = Number(words[0]);
	while(1) {
		var cand = x++
		if(isPrime(cand)){
			console.log(cand)
			return
		}
	}
	function isPrime(num) {
		for(var d = 2; d < num; d++) {
			if(num % d === 0) {
				return false
			}
		}
		return true
	}
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
99992
`.replace('\n', ''))