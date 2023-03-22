const DataObject = require('./dataObject.js');
const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
/**
 * Mini UnitTest
 * @param {*} a Do both a and b exactly match? Then pass! 
 * @param {*} b else fail 
 * @param {*} msg Is a msg about the test 
 */
function verify(a, b, msg) {
    if (JSON.stringify(a) === JSON.stringify(b)) {
        console.log(`${BgGreen}PASS:${Reset} ${msg}`)
    } else {
        console.log(`${BgRed}FAIL:${Reset} ${msg}`)
    }
}
///////// Logic follows ////////
if (require.main === module) {

    // TODO: Convert time to pixels
    // TODO: Figure out a graceful way to show changing 
    // TODO: More...

}