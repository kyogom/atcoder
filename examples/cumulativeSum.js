// inputに入力データ全体が入る
function Main(input) {
    var lines = input.split("\n");
    var n = Number(lines[0])
	var As = lines[1].split(" ").map(el => Number(el));
    var cumulativeSum = []
    cumulativeSum.push(As[0])
    As.reduce((pre, cur) => { cumulativeSum.push(pre + cur); return pre+cur})
    // 100, 204, 306, 411, 514, 617, 718, 823, 927,,,
    var diffs = []
    for(var i = 0; i < n - 1; i++) {
        diffs.push(Math.abs(cumulativeSum[i] - (cumulativeSum[n - 1] - cumulativeSum[i])))
    }
    console.log(Math.min(...diffs))
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
3
2 4 3
`.replace('\n', ''))