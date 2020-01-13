// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var n =  Number(words[0])
	var k = Number(words[1])
	var m = Number(words[2])
	var As = lines[1].split(' ').map(el => Number(el))
	var targetSum = n * m
	var nowCount = As.reduce((pre, cur) => pre + cur)
	var diff = targetSum - nowCount
	if(diff > k) { 
		console.log(-1)
		return
	}
	if(diff < 0) { 
		console.log(0)
		return
	}
	if(diff <= k) { 
		console.log(diff)
		return
	}
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
4 100 60
0 0 0
`.replace('\n', ''))