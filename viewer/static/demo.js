// VIEWER init
var viewer = new OpenSeadragon.Viewer({
    id: "camic1",
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

// set max zoom
var imagingHelper = new OpenSeadragonImaging.ImagingHelper({
    viewer: viewer
});
imagingHelper.setMaxZoom(1);

var layers = new Layer(viewer);
var annotLayer = layers.getLayer("annots");
var heatmapLayer = layers.getLayer("heatmap");

var store = new Store({});


async function run_demo(){
  // get slide
  var slideinfo = await store.getSlide();
  store.setId(slideinfo[0]._id);
  viewer.open(slideinfo[0].location);
  // get annotations
  var marktypes = await store.getMarktypes();
  // convert to list of types
  var selection = [];
  marktypes.forEach(x=>selection.push(x._id))
  var marks = await store.getMarks(selection);
  marks.forEach(y=>y.forEach(z=>renderFeature("id", z, annotLayer)))
  // get first heatmap
  var heatmap = await store.getHeatmaps();
  let hm = simpleheat(layers.delayers['heatmap'], heatmap.height, heatmap.width, 13000, 10000)
  var hm = hm.data(heatmap.values).max(18)
  hm.radius(500, 10)
  hm.draw();
}

// draw all visible layers
var overlay = viewer.canvasOverlay({
        clearBeforeRedraw:true,
        onRedraw:function() {
          var lw = 50 / (viewer.viewport.getZoom(true));
          overlay.context2d().lineWidth = lw
          layers.drawVisible(overlay.context2d());
        }
});
