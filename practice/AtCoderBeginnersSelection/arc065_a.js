// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	var method = ['dream', 'dreamer', 'erase', 'eraser']
	function permutation (result, pre, post, n) {
		if (n > 0) {
			post.forEach((_, i) => {
				var rest = [...post];
				var elem = rest.splice(i, 1);
				permutation(result, [...pre, ...elem], rest, n - 1);
			});
		} else {
			result.push(pre);
		}
		return result;
	};
	var p = permutation([], [], method, 4)
	
	for(var j = 0 ; j < p.length ; j++) {
		var s = lines[0];
		for(var i = 0; i < 4; i++) {
			var reg = RegExp(p[j][i], 'g');
			s = s.replace(reg, '')
		}
		if(s === '') {
			console.log('YES')
			return
		}
	}
	console.log('NO')
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
dreamerer
`.replace('\n', ''))