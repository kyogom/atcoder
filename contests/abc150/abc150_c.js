// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var n = lines[0].split(" ").map(el => Number(el))[0]
	var Ps = Number(lines[1].replace(/ /g, ''))
	var Qs = Number(lines[2].replace(/ /g, ''))

	var permutation = (result, pre, post, n) => {
		if (n > 0) {
			post.forEach((_, i) => {
				var rest = [...post];
				var elem = rest.splice(i, 1);
				permutation(result, [...pre, ...elem], rest, n - 1);
			});
		} else {
			result.push(Number(pre.join('')));
		}
		return result;
	};

	var makeArray = n => {
		var rs = []
		for(var i = 1; i <= n; i++) {
			rs.push('' + i)
		}
		return rs
	}

	var p = permutation([], [], makeArray(n), n)
	console.log(Math.abs(p.indexOf(Ps) - p.indexOf(Qs)))
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
2
2 1
1 2
`.replace('\n', ''))