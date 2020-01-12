// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var n = Number(lines[0].split(" ")[0]);
	var bag = Number(lines[0].split(" ")[1]);
	var Vs = lines.map((line, i) => i == 0 ? null : Number(line.split(" ")[0])).splice(1, n)
	var Ws = lines.map((line, i) => i == 0 ? null : Number(line.split(" ")[1])).splice(1, n)
	Vs.unshift(0)
	Ws.unshift(0)
	var dp = []

	for(var i = 0; i <= n; i++){
		var row = []
		for(var w = 0; w <= bag; w++) {
			// 0なら0
			if(i * w === 0) {
				row.push(0)
				continue
			}

			// 荷物が入るなら
			if(Ws[i] <= w) {
				var comparison = dp[i - 1][w - Ws[i]] + Vs[i]
				row.push(dp[i - 1][w] >= comparison ? dp[i - 1][w]: comparison)
			} else {
				row.push(dp[i - 1][w])
			}
		}
		dp.push(row)
	}
	console.log(dp[dp.length - 1][dp[0].length - 1])
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
10 2921
981421680 325
515936168 845
17309336 371
788067075 112
104855562 96
494541604 960
32007355 161
772339969 581
55112800 248
98577050 22`.replace('\n', ''))