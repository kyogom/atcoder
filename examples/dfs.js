'use strict'
// 整数 a1, a2 ,,, aNが与えられ、ちょうどkにできるか判定する

const main = arg => {
	const input = arg.trim().split("\n");
	let N = Number(input[0].split(' ')[0])
    let As = input[1].split(' ').map(a => Number(a))
    let K = Number(input[2])

    let dfs = (i = 0, sum = 0) => {
        if(i === N) return sum === K
        
        // 足さずに次のAsへ
        if(dfs(i + 1, sum)) return true
        // dfs(1, 0) -> dfs(1, )
        //           -> dfs()

        // 足して次のAsへ
        if(dfs(i + 1, sum + As[i])) return true
        // dfs(1, 1) -> dfs(2, 1)
        //           -> dfs(2, 3)

        return false
    }
    console.log(dfs())
}   
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

main(`
2
1 2
1
`)