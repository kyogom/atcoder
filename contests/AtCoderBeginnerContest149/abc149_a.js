// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	words = lines[0].split(" ");
    console.log(words[1] + words[0])
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
oder atc
`.replace('\n', ''))