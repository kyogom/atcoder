// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var nums = lines[0].replace(/\s/g, '')
	console.log(nums.replace('5', '').replace('5', '').replace('7', '').length === 0 ? 'YES' : 'NO')
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
7 7 5
`.replace('\n', ''))