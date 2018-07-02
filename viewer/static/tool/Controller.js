// given slide id

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

class Controller{
  constructor(viewer, layerContext){
    this.viewer = viewer;
    this.slideId = "";
    this.store = new Store({})
    this.context = layerContext;
  }
  loadSlide(id){
    this.slideId = id;
    this.store.setId(id);
    var slidePromise = this.store.getSlide()
    slidePromise.then((x)=>{this.viewer.open(x[0].location)})
  }
  showMarkTypes(){
    var mtPromise = this.store.getMarktypes();
    mtPromise.then(console.log)
  }
  drawMarks(selection){
    var markPromise = this.store.getMarks(selection);
    markPromise.then((x)=>x.forEach(y=>y.forEach(z=>renderFeature("id", z, this.context))))
  }
  markInfo(id){
    var markInfoPromise = this.store.getMarkById(id);
    markInfoPromise.then(console.log)
  }
}
try{
  module.exports = Controller;
}
catch(e){
  var a;
}
