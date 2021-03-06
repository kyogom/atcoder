const permutation = (nums, k) => {
    let ans = []
    if (nums.length < k) {
        return []
    }
    if (k === 1) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]]
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            let parts = nums.slice(0)
            parts.splice(i, 1)[0]
            let row = permutation(parts, k - 1)
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]))
            }
        }
    }
    return ans;
}