function Main(input) {
	const M = +input[0][1];
	const psets = input.slice(1);
   
	const accepted = new Set();
	const penas = {};
	var totalPenas = 0;
	
	if(0) {
		console.log('hi')
	}

	var q;
	for (var i = 0; i < M; i++) {
	  q = psets[i][0];
   
	  if (accepted.has(q)) continue;
   
	  if (psets[i][1][0] === 'A') {
		accepted.add(q);
	  } else {
		totalPenas++
	  }
	}
   
	const answer = '' + accepted.size + ' ' + totalPenas;
   
	console.log(answer);
  }

// テスト用の標準入力
Main(`
2 5
1 WA
1 AC
2 WA
2 AC
2 WA
`.trim().split("\n").map((v) => v.split(' ')))