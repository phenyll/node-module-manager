/**
 * Created by Oliver on 29.12.2015.
 */

var ModuleManager = function(){
  this.modules = {}
};
function puts(error, stdout, stderr) {
  console.log(error);
  console.log(stderr);
  console.log(stdout);
}

ModuleManager.prototype.mount = function (mount) {
  if(typeof this.modules[mount] === "undefined") {
    //console.log("Mounting new Module "+mount);
    var mounted;
    try {
      mounted = require(mount);
    } catch (ex){
      //console.log(mount + " could not be mounted from local space, gathering package via npm ...");

      try {
        var execSync = require('child_process').execSync;
        execSync("npm install "+mount, puts);
        mounted = require(mount);
      } catch (ex2){
        //console.log(mount + " could not be mounted, giving up.",ex2)
      }
    }
    this.modules[mount] = mounted;
  } else {
    //console.log("Using mounted Module "+mount);
  }
  return this.modules[mount];
};

ModuleManager.prototype.get = function (name) {
  return this.modules[name] || this.mount(name);
};

module.exports = new ModuleManager();