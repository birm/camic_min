// camicroscope object
class CaMic{
  constructor(divId,slideId){
    // initalize viewer
    this.viewer = new OpenSeadragon.Viewer({
      id: divId,
      prefixUrl: "images/",
      showNavigator: true,
      navigatorPosition: "BOTTOM_RIGHT",
      //navigatorId: "navigator",
      zoomPerClick: 2,
      animationTime: 0.75,
      maxZoomPixelRatio: 2,
      visibilityRatio: 1,
      constrainDuringPan: true
      //zoomPerScroll: 1
    });
    // initialize layers
    this.layers = new Layer(this.viewer);
    // initalize store
    this.store = new Store({});
    // load image
    // set overlay thing
    this.overlay = viewer.canvasOverlay({
        clearBeforeRedraw:true,
        onRedraw:function() {
          var lw = 50 / (this.viewer.viewport.getZoom(true));
          this.overlay.context2d().lineWidth = lw
          this.layers.drawVisible(this.overlay.context2d());
        }
    });
  }
  loadImg(){
    var a;
  }
}
