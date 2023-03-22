
const { getAllItemsFromDynamoDBTable } = require('./DataFetcher.js');
const NameIsTBD = require("./DataObjectThatNeedsAName.js")
const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
/**
 * Mini UnitTest
 * @param {*} a Do both a and b exactly match? Then pass! 
 * @param {*} b else fail 
 * @param {*} msg Is a msg about the test 
 */
function verdict(a, b, msg) {
    if (JSON.stringify(a) === JSON.stringify(b)) {
        console.log(`${BgGreen}PASS:${Reset} ${msg}`)
    } else {
        console.log(`${BgRed}FAIL:${Reset} ${msg}`)
    }
}
///////// Tests follows ////////
/**
 * This is a basic DOES-IT-FLOAT test!
 * 1: Does the wiring work ( i.e., exports and imports and AWS and VPN and... everything.)
 * 2: Does the limit work?
 * 3: Is the table present? 
 * 4: I know AWS wants SDK v3 but I am lazy: Is v2 OK? 
 */
async function fetch_star_limit_2_test() {
    const tableName = 'PEPS-TS-DataStream';
    const items = await getAllItemsFromDynamoDBTable(tableName);
    const isOk = items.length > 0
    verdict(isOk, true, "fetch_star_limit_2_test I got " + items.length )
}

function newup_the_data_object_test() { 
    let objs = [
        { "PK":"abc", "hello":"world"},
        {"PK":"abc", "dog":"eeboo"},
        {"PK":"opq", "cat":"frank"},
        {"PK":"xyz", "maggy":"aaawweeeooo"}
    ]
    const theThing = new NameIsTBD() 
    objs.forEach((thing)=>{
        theThing.addInformation(thing)
    })
    console.log(" ???? " + JSON.stringify(theThing.seen)  )
//    const n =  Object.keys(theThing.seen).length()
//    verdict(true, false, "newup_the_data_object_test n=" + n )


}
NameIsTBD

if (require.main === module) {

    // fetch_star_limit_2_test() 
    newup_the_data_object_test() 

}