const _ = require('lodash');

const sampleSize = 1000000;
const blackBalls = _.times(12, _.constant('w'))
const whiteBalls = _.times(8, _.constant('b'))
const allBalls = _.shuffle([...whiteBalls, ...blackBalls])

// console.log(allBalls);
const allSamples = []

for (let i = 0; i < sampleSize; i++) {
    allSamples.push(_.sampleSize(allBalls, 2))
    // console.log();
}
const differentBalls = allSamples.filter(sample => new Set(sample).size !== 1)
console.log(differentBalls.length);

console.log(differentBalls.length / sampleSize);
console.log(12 / 25);