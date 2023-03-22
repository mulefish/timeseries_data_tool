class NameIsTBD { 
    constructor() {
        this.seen = {} // This will be a Map-of-Objects where the outter most key is the ECID
    } 

    addInformation(obj) {
      console.log("addInfo and obj is " + JSON.stringify( obj ))
        if ( this.seen.hasOwnProperty(obj.PK)) {
          this.seen[obj.PK].append(obj)
          this.seen.append(obj)
        } else { 
          this.seen[obj.PK] = [] 
          // this.seen[obj.PK].append(obj)
        }
    }
}



try {
    module.exports = NameIsTBD
} catch (ignore) {
    // This is here for TDD from the CLI. In a browser this would throw an error!
    // Ignore it! 
}