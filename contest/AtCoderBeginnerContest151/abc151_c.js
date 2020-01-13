'use strict'
function Main(lines) {
	var m = lines[0].split(' ')[1]
	var psets = lines.map((line, i) => {
		return i == 0 ? null : { idx : Number(line.split(" ")[0]), rs : line.split(" ")[1]}
	}).splice(1, m)
	var AClist = new Set()
	var WAcount = 0
	for(var i = 0; i < psets.length; i++) {
		if(AClist.has(psets[i].idx)) continue
		if(psets[i].rs === 'AC') {
			AClist.add(psets[i].idx)
		} else if(psets[i].rs === 'WA'){
			WAcount++
		}
	}
	console.log(AClist.size, WAcount)
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
*/

// テスト用の標準入力
Main(`
2 5
1 WA
1 AC
2 WA
2 AC
2 WA
`.trim().split("\n"))