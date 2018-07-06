class Layer{
  constructor(viewer){
    this.viewer
    this.layers={}
    this.delayers={}
    this.visibleLayers=new Set([]);
  }
  getLayer(name){
    if !(name in this.layers){
      this.delayers[name] = delayer({});
      this.layers[name] = ViewportCalibratedCanvas(this.delayers[name], this.viewer);
    }
    this.showLayer(name)
    return thislayers[name]
  }
  hideLayer(name){
    this.visibleLayers.delete(name)
  }
  showLayer(name){
    this.visibleLayers.add(name)
  }
  drawVisible(onto){
    for (let name of this.visibleLayers.entries()){
      this.delayers[name].__apply_all(onto);
    }
  }

}
// the layers

// get layer, creating if not exists

// draw all
