// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
	var n = Number(lines[0]);
	for(var i = 0; i < n ; i++) {
		var words = lines[i + 1].split(" ");
		var t = Number(words[0]),
		target_x = Number(words[1]),
		target_y = Number(words[2]),
		now = {x: 0, y: 0},
		timeToGoal = moveToTarget(now, target_x, target_y)
		if(( t - timeToGoal) % 2 !== 0 || t < timeToGoal) {
			console.log('No')
			return
		}
	}
	console.log('Yes')
	function moveToTarget(now, target_x, target_y) {
		var timeToGoal = 0
		while(1) {
			if(now.x !== target_x) {
				var distance = Math.abs(target_x - now.x)
				now.x = target_x > now.x ? now.x + distance : now.x - distance
				timeToGoal += distance
			}
			if(now.y !== target_y) {
				var distance = Math.abs(target_y - now.y)
				now.y = target_y > now.y ? now.y + distance : now.y - distance
				timeToGoal += distance
			}
			if(now.x === target_x && now.y === target_y) {
				return timeToGoal
			}
		}
	}
	
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
2
100000 100000 0
100000 100000 0
`.replace('\n', ''))