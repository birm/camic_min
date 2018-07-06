// button callbacks

// demo annotations
function drawAnnots(){
  var mtPromise = this.store.getMarktypes();
  mtPromise.then((data)=>{
    // get selection; a list of marktypes
    var markPromise = this.store.getMarks(selection);
    markPromise.then((x)=>x.forEach(y=>y.forEach(z=>renderFeature("id", z, this.context))))
  })
}
// demo heatmap

// demo annotation button
// demo heatmap button
