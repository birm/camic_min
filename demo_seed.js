slides = [{
  id: "cmu1"
  name: "TEST1",
  location: "/slides/cmu1.svs.dzi",
  mpp: 0.499,
  checksum: "NA"
},
{
  id: "duzomo"
  name: "TEST2",
  location: "/slides/duzomo.dzi",
  mpp: 0.499,
  checksum: "NA"
}];

marktypes = [{
  id: "cmutest"
  slide: "cmu1",
  type: "human",
  name: "cmutest"
},
{
  id: "duzomotest"
  slide: "duzomo",
  type: "human",
  name: "duzomotest"
}]

data1 = []
for (var i=0; i<100; i++){
  data1.push([Math.floor(Math.random()*100), Math.floor(Math.random()*100),Math.floor(Math.random()*1000)])
}

data2 = []
for (var i=0; i<100; i++){
  data2.push([Math.floor(Math.random()*100), Math.floor(Math.random()*100),Math.floor(Math.random()*1000)])
}

heatmaps = [{
  slide: "cmu1",
  name: "cmu1heatmap",
  width: 100,
  height: 100,
  key: "count",
  values: data1
},
{
  slide: "duzomo",
  name: "duzomoheatmap",
  width: 100,
  height: 100,
  key: "count",
  values: data2
}]

var markings = [{
  properties: {marktype: "cmutest"},
  geometry: [
    {
      type: "Polygon",
      coordinates: [[0.1, 0.1],[0.3, 0.1],[0.3, 0.3],[0.1, 0.3]]
    }
  ]
},
{
  properties: {marktype: "duzomotest"},
  geometry: [
    {
      type: "Polygon",
      coordinates: [[0.25,0.5], [0.75, 0.5], [0.5, 0.25]]
    }
  ]
}
]
