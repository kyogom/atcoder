// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	words = lines[0].split(" ");
	var a = Number(words[0]);
    var b = Number(words[1]);
    if(a % 2 === 0 || b % 2 === 0) {
        console.log('Even')
        return
    }
    console.log('Odd')
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const input = 
`
4 5
`.replace('\n', '') //最初の改行を削除

Main(input)