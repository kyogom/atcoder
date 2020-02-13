// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var words1 = lines[0].split(" ");
	var words2 = lines[1].split(" ");
	var words3 = lines[2].split(" ");
	var n = Number(words1[0]);
	var k = Number(words1[1]);
	var r = Number(words2[0]);
	var s = Number(words2[1]);
	var p = Number(words2[2]);
	var t = words3[0]
	
	// console.log(n, k)
	// console.log(r, s, p)
	// console.log(t)

	// 全て勝利するパターンを作る
	// 例：prpsr
	var myBestHand = t.split("").map((h) => {
		return beater(h)
	}).join("")

	// k個の間隔で同じ手が出ている場合、修正候補を作る
	for(var i = 0; i <= n - k + 1; i++) {
		if(myBestHand[i] === myBestHand[i + k]){
			// k間隔で2連続で同じ手なら、2回目に負ける
			if(myBestHand.length > i+k+k) {
				myBestHand = replaceAt(myBestHand, i + k, not2(myBestHand[i+k], myBestHand[i+k+k])) 
			} else {
				myBestHand = replaceAt(myBestHand, i + k, not(myBestHand[i+k])) 
			}
			
		} 
	}
	//  
	console.log(calculateWin(myBestHand, t))


	// 修正候補の期待得点をそれぞれ計算する

	function replaceAt(string, index, char) {
		return string.substr(0, index) + char + string.substr(index + 1);
	}

	function not(hand) {
		var hands = ['r', 's', 'p']
		if(hand === hands[0]) return hands[1]
		if(hand === hands[1]) return hands[2]
		if(hand === hands[2]) return hands[0]
	}

	// ここで次の手の邪魔にならない手を選ぶ必要がある
	function not2(hand, hand2) {
		var hands = 'rsp'
		return hands.replace(hand, '').replace(hand2, '')[0]
	}

	function beater(hand) {
		switch (hand) {
			case 'r': 
				return 'p'
			case 's':
				return 'r'
			case 'p':
				return 's'
		}
	}
	function calculateWin(myHand, enemyHand) {
		var win = 0
		for(var i =0;i < myHand.length; i++) {
			if(myHand[i] === 'r' && enemyHand[i] === 's') {
				win += r
			} else if(myHand[i] === 's' && enemyHand[i] === 'p') {
				win += s
			} else if(myHand[i] === 'p' && enemyHand[i] === 'r') {
				win += p
			}
		}
		return win
	}
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/


// テスト用の標準入力
Main(`
30 5
325 234 123
rspsspspsrpspsppprpsprpssprpsr
`.replace('\n', ''))