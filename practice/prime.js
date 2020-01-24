let prime = [2]
let order = 0
for(let i = 3; i < 1000; i++) {
    let isPrime = true
    // すでに数え上げた素数で割れるかのみチェックする
    for(let j = 0; j < prime.length; j++) {
        order++
        if(i % prime[j] === 0) {
            isPrime = false
            break
        }
    }
    if(isPrime) {
        prime.push(i)
    }
}
console.log(prime)
console.log(order)