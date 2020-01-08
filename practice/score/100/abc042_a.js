// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
    var words = lines[0].split(" ");
    var ans1 = [5, 5, 7]
    var ans2 = [5, 7, 5]
    var ans3 = [7, 5, 5]
	console.log(words.join('') === ans1.join('') || words.join('') === ans2.join('') || words.join('') === ans3.join('') ? 'YES' : 'NO')
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
7 7 5
`.replace('\n', ''))