// inputに入力データ全体が入る
function Main(input) {
	lines = input.split("\n");
    nums = lines[1].split(" ");
    var out = 0;
    while(1) {
        for(var i = 0; i < nums.length; i++) {
            nums[i] = Number(nums[i])
            if(nums[i] % 2 !== 0) {
                console.log(out)
                return
            }
            nums[i] = nums[i] / 2
        }
        out++
    }
}

// AtCoder提出用
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
var input = 
`
1
2
`.replace('\n', '') //最初の改行を削除

Main(input)