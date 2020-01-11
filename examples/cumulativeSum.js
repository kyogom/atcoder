// inputに入力データ全体が入る
function Main(input) {
    var lines = input.split("\n");
    var n = Number(lines[0])
	var A = lines[1].split(" ").map(el => Number(el));
    var cumulativeSum = [0]
    A.reduce((pre, cur) => { cumulativeSum.push(pre + cur); return pre+cur}, 0)
    console.log(cumulativeSum)
    var diffs = []
    for(var i = 0; i < n; i++) {
        diffs.push(Math.abs(cumulativeSum[i] - (cumulativeSum[n] - cumulativeSum[i])))
    }
    console.log(Math.min(...diffs))
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
2
2020202020 2020202020
`.replace('\n', ''))