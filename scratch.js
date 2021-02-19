function *generateFloats(start, end, step) {
    for (let i = start; i <= end; i += step) yield i
}

function expFunc(x) {
    return Array.isArray(x) ? x.map(x => Math.exp(x)) : Math.exp(x)
}

const x = [...generateFloats(-6, 6, 0.5)]
const labels = x.map((v, i) => i)
const data = expFunc(x)

console.log(x)
console.log(labels)
console.log(data)
