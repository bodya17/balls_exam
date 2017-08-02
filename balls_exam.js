const _ = require('lodash');

const sampleSize = 10000000;
const blackBalls = _.times(12, _.constant('w'))
const whiteBalls = _.times(8, _.constant('b'))
const allBalls = _.shuffle([...whiteBalls, ...blackBalls])

/////////////////////////
// 
// WITHOUT RETURN
//
/////////////////////////

function probabilityWithoutReturn() {
    const allSamples = []
    for (let i = 0; i < sampleSize; i++) {
        allSamples.push(_.sampleSize(allBalls, 2))
    }
    const differentBalls = allSamples.filter(sample => new Set(sample).size !== 1)
    return differentBalls.length / sampleSize
}   


/////////////////////////
// 
// WITH RETURN
//
/////////////////////////

function probabilityWithReturn() {
    const allSamples = []
    for (let i = 0; i < sampleSize; i++) {
        allSamples.push([
            allBalls[_.random(0, allBalls.length - 1)],
            allBalls[_.random(0, allBalls.length - 1)]
        ])
    }
    const differentBalls = allSamples.filter(sample => new Set(sample).size !== 1)
    return differentBalls.length / sampleSize
}   
console.log(probabilityWithoutReturn());
console.log(2 * 8 / 20 * 12 / 19); // with return

console.log(probabilityWithReturn());
console.log(2 * 8 / 20 * 12 / 20 ); // with return

