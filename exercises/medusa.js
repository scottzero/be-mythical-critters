class Medusa {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) { //default color parameter
    this.name = name; //this unicorn is instantiated with a name
    this.statues = [];
  }
    stare(victim){
      this.statues.push(victim)
      return .this.statues
    }
    //
    // says(words){
    //   return "**;* "+words+" *;**"
    // }
}//end class medusa

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Medusa;
// module.exports  = Person;
