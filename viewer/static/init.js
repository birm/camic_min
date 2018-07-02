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

// layer context needed for contoller
var c1 = delayer({});
var annot_canvas = ViewportCalibratedCanvas(c1, viewer);
var c2 = delayer({});
var draw_canvas = ViewportCalibratedCanvas(c2, viewer);
var c3 = delayer({});
var c4 = delayer({});
var heat_canvas = ViewportCalibratedCanvas(c3, viewer); // WRONG CALIBRATION
controller = new Controller(viewer, annot_canvas)
// load slide
var id=getUrlVars().id
controller.loadSlide(id)
controller.showMarkTypes()

var draw = new Draw(viewer, draw_canvas);
draw.registerMouse();

// HEATMAP DEMO//
var heat = simpleheat(c3, 130, 100, 13000, 10000)
var heat2 = simpleheat(c4, 3900, 3000, 13000, 10000)
data = []
for (var i=0; i<5; i++){
  data.push([Math.floor(Math.random()*100), Math.floor(Math.random()*100),Math.floor(Math.random()*1000)])
}
data2 = []
for (var i=0; i<1e3; i++){
  data2.push([Math.floor(Math.random()*3000), Math.floor(Math.random()*3000),Math.floor(Math.random()*100)])
}
var heat = heat.data(data).max(18)
heat.draw();
heat.radius(500, 10)
var heat2 = heat2.data(data2).max(18)
heat2.draw();
heat2.radius(500, 10)

// draw all active verlays each pan
var overlay = viewer.canvasOverlay({
        clearBeforeRedraw:true,
        onRedraw:function() {
          var lw = 50 / (viewer.viewport.getZoom(true));
          overlay.context2d().lineWidth = lw
          c1.__apply_all(overlay.context2d());
          c2.__apply_all(overlay.context2d());
          c3.__apply_all(overlay.context2d());
          c4.__apply_all(overlay.context2d());
        }
});

// demo code
/**
 controller.drawMarks(["5b2befb69c0e03612a8b75d0"])
 draw.startDrawing()
**/
