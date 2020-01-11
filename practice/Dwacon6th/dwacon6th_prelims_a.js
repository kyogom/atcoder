// inputに入力データ全体が入る
function Main(input) {
	var lines = input.split("\n");
	var titles = lines.map(l => l.split(' ')[0]).splice(1, lines.length - 3)
	var sleptAt = titles.indexOf(lines[lines.length - 2])
	var sum = 0
	for(var i = sleptAt + 2; i < lines.length -2 ; i ++) {
		sum+= Number(lines[i].split(' ')[1])
	}
	console.log(sum)
}

/*
提出時はコメントアウトを外す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
*/

// テスト用の標準入力
Main(`
15
ypnxn 279
kgjgwx 464
qquhuwq 327
rxing 549
pmuduhznoaqu 832
dagktgdarveusju 595
wunfagppcoi 200
dhavrncwfw 720
jpcmigg 658
wrczqxycivdqn 639
mcmkkbnjfeod 992
htqvkgkbhtytsz 130
twflegsjz 467
dswxxrxuzzfhkp 989
szfwtzfpnscgue 958
pmuduhznoaqu
`.replace('\n', ''))