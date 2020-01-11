// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var n_num = Number(lines[0].split(' ')[0])
	var n_str = lines[0].split(' ')[0].split('')
	var d = lines[1].split(' ')
	while(1) {
		if(n_str.some(n => d.indexOf(n) > -1)) {
			n_num++
			n_str = (n_num + '').split('')
		} else {
			console.log(n_num)
			break
		}
	}
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
9999 1
0`.replace('\n', ''))