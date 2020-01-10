var permutation = (result, pre, post, n) => {
    if (n > 0) {
        post.forEach((_, i) => {
            var rest = [...post];
            var elem = rest.splice(i, 1);
            permutation(result, [...pre, ...elem], rest, n - 1);
        });
    } else {
        result.push(pre);
    }
    return result;
};
var p = permutation([], [], ['a', 'b', 'c', 'd'], 4)
console.log(p)