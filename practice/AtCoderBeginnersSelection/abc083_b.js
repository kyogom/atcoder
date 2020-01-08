// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	words = lines[0].split(" ");
	var n = Number(words[0]);
    var a = Number(words[1]);
    var b = Number(words[2]);
    var out = 0
    for(var i = 1; i <= n; i++) {
        var eachDigit = String(i).split("")
        var sumEachDigit = eachDigit.reduce((acc, curr) => Number(acc) + Number(curr))
        if(a <= sumEachDigit && sumEachDigit <= b) {
            out += i
        }
    }
    console.log(out)
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(`
20 2 5
`.replace('\n', ''))