// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
    var s = lines[0];
    var match = s.match(/1/g)
    if(match === null) {
        console.log(0)
        return
    }
    console.log(match.length)
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
var input = 
`
100
`.replace('\n', '') //最初の改行を削除

Main(input)