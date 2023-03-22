
const { getAllItemsFromDynamoDBTable } = require('./DataFetcher.js');
const NameIsTBD = require("./DataObjectThatNeedsAName.js")
const Reset = "\x1b[0m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
////////// Tests follows ////////

const example = {
    ecid: '76705213908373080272866446199165331706',
    urlPath: '/shop/mybag',
    country: 'nill',
    attention: 'ID_ot-header-id-TAB01_Privacy Preference C|ID_ot-pc-content|ID_onetrust-pc-sdk|ID_onetrust-consent-sdk|HTML_(function() {\n' +
      '\t\twind|',
    gender: 'nill',
    whichABTests: [ 12, 212, 178, 26 ],
    count: 0,
    x: -99,
    y: -99,
    SK: 'EVENT#1679518847.17',
    eventType: 'nill',
    PK: 'EVENT#76705213908373080272866446199165331706'
  }
  function green(msg) {
          console.log(`${BgGreen} ${msg} ${Reset}`)
      }
  
const skip = `HTML_(function() {
    wind|`
async function fetchData() {
    const tableName = 'PEPS-TS-DataStream';
    const items = await getAllItemsFromDynamoDBTable(tableName);
    const isOk = items.length > 0

    items.forEach((item, i)=>{ 
        green(i)
        item.attention = item.attention.replace("HTML_(function() {","")
        item.attention = item.attention.replace("\n","")
        item.attention = item.attention.replace("wind|","")
        console.log( item.attention )
        console.log(item.urlPath) 


    }) 



}
fetchData() 



