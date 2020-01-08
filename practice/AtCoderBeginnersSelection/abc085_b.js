// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	var d = lines.map((el, idx) => idx !==0 ? el : null).filter(el => el !== null)
	console.log(distinct(d).length)

	function distinct(values) {
		return values.filter(function (x, i, self) {
            return self.indexOf(x) === i && x !== "";
        });
	}
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
4
10
8
8
6
`.replace('\n', ''))