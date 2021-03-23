const key = 'pk.eyJ1IjoiY2poZXJyIiwiYSI6ImNrbTJkMWJ2dDAzejcybnFrZ29yeWp6NWEifQ.wQaqqM2ESfBng6N0pIvHUw';

const options = {
  lat: 20.6534,
  lng: -105.2253,
  zoom: 9,
  style: 'mapbox://styles/cjherr/ckmcb1ejx51ur18o50mszo5bp',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
moments = loadTable('PlacesThatMadeMe.csv','csv','header');
}


function draw() {
  clear();
  stroke(10,50,10,160);
  strokeWeight(3);
  noFill();
  //const athens = myMap.latLngToPixel(39.329201,-82.101173);
  //ellipse(athens.x, athens.y, 100, 100)
  //if(dist(athens.x,athens.y,mouseX,mouseY)<100){
  //fill(0,100);
  //}else{
  //fill(255,100);
//}
  
  for (let i = 0; i < moments.getRowCount(); i++) {
    const latitude = Number(moments.getString(i,'reclat'));
    const longitude = Number(moments.getString(i,'reclong'));
    const pos = myMap.latLngToPixel(latitude,longitude);
    
         let name = moments.getString(i,'name');

    
         ellipse(pos.x,pos.y,1 * myMap.zoom(),1 * myMap.zoom());
    
 if(dist(pos.x,pos.y,mouseX,mouseY) < 1 * myMap.zoom()){
    textSize(32);
     text(name,pos.x,pos.y);
  }

  
  
}
}
